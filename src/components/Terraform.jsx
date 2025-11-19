import { motion } from 'framer-motion'
import AWSAnimation from './AWSAnimation'
import './Terraform.css'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

function Terraform() {
  return (
    <div className="tool-page">
      <motion.div 
        className="page-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          Terraform
        </motion.h1>
        <motion.p 
          className="page-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Infrastructure as Code
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <AWSAnimation />
      </motion.div>

      <motion.div 
        className="content-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <motion.section className="info-section" variants={itemVariants}>
          <motion.h2
            whileHover={{ scale: 1.05, x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            What is Terraform?
          </motion.h2>
          <p>
            Terraform is an open-source infrastructure as code (IaC) tool created by HashiCorp. 
            It allows you to define and provision infrastructure using a high-level configuration 
            language called HCL (HashiCorp Configuration Language), or optionally JSON.
          </p>
        </motion.section>

        <motion.section className="info-section" variants={itemVariants}>
          <motion.h2
            whileHover={{ scale: 1.05, x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Key Features
          </motion.h2>
          <ul className="feature-list">
            <li><strong>Infrastructure as Code:</strong> Define your infrastructure in configuration files</li>
            <li><strong>Multi-Cloud Support:</strong> Works with AWS, Azure, GCP, and many other providers</li>
            <li><strong>State Management:</strong> Tracks the state of your infrastructure</li>
            <li><strong>Plan and Apply:</strong> Preview changes before applying them</li>
            <li><strong>Dependency Management:</strong> Automatically handles resource dependencies</li>
            <li><strong>Modularity:</strong> Reusable modules for common infrastructure patterns</li>
          </ul>
        </motion.section>

        <motion.section className="info-section" variants={itemVariants}>
          <motion.h2
            whileHover={{ scale: 1.05, x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Basic Workflow
          </motion.h2>
          <ol className="workflow-list">
            <li><strong>Write:</strong> Define your infrastructure in .tf files</li>
            <li><strong>Initialize:</strong> Run <code>terraform init</code> to download providers</li>
            <li><strong>Plan:</strong> Run <code>terraform plan</code> to preview changes</li>
            <li><strong>Apply:</strong> Run <code>terraform apply</code> to create infrastructure</li>
            <li><strong>Destroy:</strong> Run <code>terraform destroy</code> to remove infrastructure</li>
          </ol>
        </motion.section>

        <motion.section 
          className="info-section aws-section" 
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <motion.h2
            whileHover={{ scale: 1.05, x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            🌩️ AWS EC2 with Terraform
          </motion.h2>
          <p>
            Terraform excels at provisioning AWS EC2 instances. Below are comprehensive examples 
            showing how to create EC2 instances with various configurations including security groups, 
            VPC setup, and auto-scaling.
          </p>
          
          <div className="aws-features-grid">
            <div className="aws-feature-card">
              <div className="aws-feature-icon">🔒</div>
              <h3>Security Groups</h3>
              <p>Configure firewall rules and network access</p>
            </div>
            <div className="aws-feature-card">
              <div className="aws-feature-icon">🌐</div>
              <h3>VPC Configuration</h3>
              <p>Set up virtual private clouds and subnets</p>
            </div>
            <div className="aws-feature-card">
              <div className="aws-feature-icon">📈</div>
              <h3>Auto Scaling</h3>
              <p>Automatically scale instances based on demand</p>
            </div>
            <div className="aws-feature-card">
              <div className="aws-feature-icon">💾</div>
              <h3>EBS Volumes</h3>
              <p>Attach persistent storage to instances</p>
            </div>
          </div>

          <h3 className="subsection-title">Basic EC2 Instance</h3>
          <div className="code-block">
            <pre>{`# Example: AWS EC2 Instance
provider "aws" {
  region = "us-west-2"
}

resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"

  tags = {
    Name = "WebServer"
  }
}

output "instance_ip" {
  value = aws_instance.web.public_ip
}`}</pre>
          </div>

          <h3 className="subsection-title">EC2 with Security Group</h3>
          <div className="code-block">
            <pre>{`# EC2 Instance with Security Group
resource "aws_security_group" "web_sg" {
  name        = "web-security-group"
  description = "Security group for web servers"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["10.0.0.0/8"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "web" {
  ami                    = "ami-0c55b159cbfafe1f0"
  instance_type          = "t2.micro"
  vpc_security_group_ids = [aws_security_group.web_sg.id]

  tags = {
    Name = "WebServer"
  }
}`}</pre>
          </div>

          <h3 className="subsection-title">Multiple EC2 Instances with Auto Scaling</h3>
          <div className="code-block">
            <pre>{`# Launch Template for Auto Scaling
resource "aws_launch_template" "web_template" {
  name_prefix   = "web-"
  image_id      = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"

  vpc_security_group_ids = [aws_security_group.web_sg.id]

  tag_specifications {
    resource_type = "instance"
    tags = {
      Name = "WebServer"
    }
  }
}

# Auto Scaling Group
resource "aws_autoscaling_group" "web_asg" {
  name                = "web-asg"
  vpc_zone_identifier = [aws_subnet.public.id]
  target_group_arns    = [aws_lb_target_group.web.arn]
  health_check_type   = "ELB"
  min_size            = 2
  max_size            = 10
  desired_capacity    = 3

  launch_template {
    id      = aws_launch_template.web_template.id
    version = "$Latest"
  }
}`}</pre>
          </div>
        </motion.section>

        <motion.section className="info-section" variants={itemVariants}>
          <motion.h2
            whileHover={{ scale: 1.05, x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Use Cases
          </motion.h2>
          <ul className="use-cases-list">
            <li>Provisioning cloud infrastructure (AWS, Azure, GCP)</li>
            <li>Managing Kubernetes clusters</li>
            <li>Setting up networking and security groups</li>
            <li>Creating and managing databases</li>
            <li>Deploying containerized applications</li>
            <li>Managing DNS and CDN configurations</li>
          </ul>
        </motion.section>

        <motion.section className="info-section" variants={itemVariants}>
          <motion.h2
            whileHover={{ scale: 1.05, x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Best Practices
          </motion.h2>
          <ul className="best-practices-list">
            <li>Use version control for your Terraform configurations</li>
            <li>Store state files remotely (S3, Terraform Cloud)</li>
            <li>Use modules to organize and reuse code</li>
            <li>Implement proper variable validation</li>
            <li>Use workspaces for environment separation</li>
            <li>Regularly run <code>terraform fmt</code> to format code</li>
            <li>Use <code>terraform validate</code> before applying</li>
          </ul>
        </motion.section>
      </motion.div>
    </div>
  )
}

export default Terraform

