output "my_public_ip" {
  value     = var.LOCAL_IP
  sensitive = true
}

output "vpc" {
  value = aws_vpc.main.id
}

output "ec2_ip" {
  value = aws_eip.this.public_ip
}

