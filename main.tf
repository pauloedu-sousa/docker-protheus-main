resource "aws_vpc" "main" {
  cidr_block = "${var.CIDR_BASE_16}.0.0/16"

  tags = {
    Name = "${var.PREFIX}-vpc"
  }
}

resource "aws_internet_gateway" "this" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name = "${var.PREFIX}-igw"

  }
}

resource "aws_route_table" "public" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.this.id
  }
}

resource "aws_route_table_association" "public_assoc" {
  subnet_id      = aws_subnet.public.id
  route_table_id = aws_route_table.public.id

}

resource "aws_subnet" "public" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = "${var.CIDR_BASE_16}.1.0/24"
  map_public_ip_on_launch = true
  availability_zone       = "us-east-1a"

  tags = {
    Name = "${var.PREFIX}-subnet-pub"

  }
}

resource "aws_subnet" "private" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = "${var.CIDR_BASE_16}.2.0/24"
  availability_zone = "us-east-1b"

  tags = {
    Name = "${var.PREFIX}-subnet-pri"

  }
}

resource "aws_security_group" "this" {
  vpc_id = aws_vpc.main.id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["${var.LOCAL_IP}/32"]
  }

  ingress {
    description = "Allow frontend"
    from_port   = 8485
    to_port     = 8485
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "Allow broker"
    from_port   = 8000
    to_port     = 8000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "Allow all HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "Allow Proxy Manager"
    from_port   = 81
    to_port     = 81
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "Allow all HTTPS"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "Allow all ICMP"
    from_port   = -1
    to_port     = -1
    protocol    = "icmp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "${var.PREFIX}"

  }
}

resource "tls_private_key" "this" {
  algorithm = "RSA"
  rsa_bits  = 4096
}

resource "local_file" "private_key" {
  content         = tls_private_key.this.private_key_pem
  filename        = "./keys/id_rsa"
  file_permission = "0600"
}

resource "local_file" "public_key" {
  content  = tls_private_key.this.public_key_openssh
  filename = "./keys/id_rsa.pub"
}

resource "aws_key_pair" "this" {
  key_name   = "${var.PREFIX}-key"
  public_key = tls_private_key.this.public_key_openssh

  tags = {
    Name = "${var.PREFIX}-key"

  }
}

resource "aws_eip" "this" {
  domain   = "vpc"
  instance = aws_instance.this.id
}

resource "aws_instance" "this" {
  ami                    = "ami-084568db4383264d4"
  instance_type          = var.EC2_TYPE
  subnet_id              = aws_subnet.public.id
  vpc_security_group_ids = [aws_security_group.this.id]
  key_name               = aws_key_pair.this.key_name

  root_block_device {
    volume_size = 20
    volume_type = "gp2"
  }

  connection {
    type        = "ssh"
    user        = "ubuntu"
    private_key = local_file.private_key.content
    host        = self.public_ip
  }

  provisioner "remote-exec" {
    inline = [
      "sudo apt update",
      "sudo curl https://get.docker.com/ | sh",
      "sudo systemctl enable docker",
      "sudo systemctl start docker",
      "sudo usermod -aG docker ubuntu",
      "sudo mkdir -p /app/appserver",
      "sudo chown -R ubuntu:ubuntu /app"
    ]
  }

  provisioner "file" {
    source      = "./compose/docker-compose.yaml"
    destination = "/app/docker-compose.yaml"
  }

  provisioner "file" {
    source      = "./compose/.env"
    destination = "/app/.env"
  }

  provisioner "file" {
    source      = "./compose/appserver/appserver.ini"
    destination = "/app/appserver/appserver.ini"
  }

  provisioner "file" {
    source      = "./compose/appserver/appserver2.ini"
    destination = "/app/appserver/appserver2.ini"
  }

  provisioner "remote-exec" {
    inline = [
      "echo 'fs.file-max = 32767' | sudo tee -a /etc/sysctl.conf",
      "echo 32767 | sudo tee /proc/sys/fs/file-max",
      "docker login registry.gitlab.com -u ${var.gitlab_user} -p ${var.gitlab_password}",
      "cd /app",
      "echo \"*** Starting App\"",
      "docker compose up -d"
    ]
  }

  tags = {
    Name = "${var.PREFIX}"
  }
}
