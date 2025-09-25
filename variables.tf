variable "AWS_AKA" {
  type        = string
  description = "AWS access key"
}

variable "AWS_SKA" {
  type        = string
  description = "AWS secret key"
}

variable "LOCAL_IP" {
  type        = string
  description = "Developer IP"
}

variable "PREFIX" {
  type        = string
  description = "Unique ID"
  default     = "Ascendra"
}

variable "CIDR_BASE_16" {
  type        = string
  description = "CIDR Base for two first octets"
  default = "10.100"
}

variable "EC2_TYPE" {
  type        = string
  default     = "t2.medium"
  description = "EC2 type for base instance"
}

variable "gitlab_user" {
  type        = string
  description = "login"
}

variable "gitlab_password" {
  type        = string
  description = "login"
}

