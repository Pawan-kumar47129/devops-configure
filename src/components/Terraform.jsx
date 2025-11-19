import './Terraform.css'

function Terraform() {
  return (
    <div className="tool-page">
      <div className="page-header">
        <h1>Terraform</h1>
        <p className="page-subtitle">Infrastructure as Code</p>
      </div>

      <div className="content-section">
        <section className="info-section">
          <h2>What is Terraform?</h2>
          <p>
            Terraform is an open-source infrastructure as code (IaC) tool created by HashiCorp. 
            It allows you to define and provision infrastructure using a high-level configuration 
            language called HCL (HashiCorp Configuration Language), or optionally JSON.
          </p>
        </section>

        <section className="info-section">
          <h2>Key Features</h2>
          <ul className="feature-list">
            <li><strong>Infrastructure as Code:</strong> Define your infrastructure in configuration files</li>
            <li><strong>Multi-Cloud Support:</strong> Works with AWS, Azure, GCP, and many other providers</li>
            <li><strong>State Management:</strong> Tracks the state of your infrastructure</li>
            <li><strong>Plan and Apply:</strong> Preview changes before applying them</li>
            <li><strong>Dependency Management:</strong> Automatically handles resource dependencies</li>
            <li><strong>Modularity:</strong> Reusable modules for common infrastructure patterns</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>Basic Workflow</h2>
          <ol className="workflow-list">
            <li><strong>Write:</strong> Define your infrastructure in .tf files</li>
            <li><strong>Initialize:</strong> Run <code>terraform init</code> to download providers</li>
            <li><strong>Plan:</strong> Run <code>terraform plan</code> to preview changes</li>
            <li><strong>Apply:</strong> Run <code>terraform apply</code> to create infrastructure</li>
            <li><strong>Destroy:</strong> Run <code>terraform destroy</code> to remove infrastructure</li>
          </ol>
        </section>

        <section className="info-section">
          <h2>Example Configuration</h2>
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
        </section>

        <section className="info-section">
          <h2>Use Cases</h2>
          <ul className="use-cases-list">
            <li>Provisioning cloud infrastructure (AWS, Azure, GCP)</li>
            <li>Managing Kubernetes clusters</li>
            <li>Setting up networking and security groups</li>
            <li>Creating and managing databases</li>
            <li>Deploying containerized applications</li>
            <li>Managing DNS and CDN configurations</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>Best Practices</h2>
          <ul className="best-practices-list">
            <li>Use version control for your Terraform configurations</li>
            <li>Store state files remotely (S3, Terraform Cloud)</li>
            <li>Use modules to organize and reuse code</li>
            <li>Implement proper variable validation</li>
            <li>Use workspaces for environment separation</li>
            <li>Regularly run <code>terraform fmt</code> to format code</li>
            <li>Use <code>terraform validate</code> before applying</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Terraform

