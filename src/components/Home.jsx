import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1 className="hero-title">DevOps Tools</h1>
        <p className="hero-subtitle">Infrastructure as Code, Configuration Management, and Monitoring</p>
      </section>

      <section className="tools-grid">
        <div className="tool-card">
          <div className="tool-icon terraform-icon">🚀</div>
          <h2>Terraform</h2>
          <p>Infrastructure as Code tool for building, changing, and versioning infrastructure safely and efficiently.</p>
          <Link to="/terraform" className="card-button">Learn More</Link>
        </div>

        <div className="tool-card">
          <div className="tool-icon ansible-icon">⚙️</div>
          <h2>Ansible</h2>
          <p>Automation platform that makes IT operations simpler. Configuration management, application deployment, and orchestration.</p>
          <Link to="/ansible" className="card-button">Learn More</Link>
        </div>

        <div className="tool-card">
          <div className="tool-icon nagios-icon">📊</div>
          <h2>Nagios</h2>
          <p>Powerful monitoring system that enables organizations to identify and resolve IT infrastructure problems.</p>
          <Link to="/nagios" className="card-button">Learn More</Link>
        </div>
      </section>

      <section className="features">
        <h2>Why These Tools Matter</h2>
        <div className="features-list">
          <div className="feature-item">
            <h3>Automation</h3>
            <p>Streamline your infrastructure management and reduce manual errors</p>
          </div>
          <div className="feature-item">
            <h3>Scalability</h3>
            <p>Easily scale your infrastructure up or down based on demand</p>
          </div>
          <div className="feature-item">
            <h3>Reliability</h3>
            <p>Monitor and maintain your systems with confidence</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

