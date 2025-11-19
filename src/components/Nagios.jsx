import './Nagios.css'

function Nagios() {
  return (
    <div className="tool-page">
      <div className="page-header">
        <h1>Nagios</h1>
        <p className="page-subtitle">IT Infrastructure Monitoring</p>
      </div>

      <div className="content-section">
        <section className="info-section">
          <h2>What is Nagios?</h2>
          <p>
            Nagios is a powerful open-source monitoring system that enables organizations to identify 
            and resolve IT infrastructure problems before they affect critical business processes. 
            It monitors hosts, services, and network devices, alerting administrators when issues are detected.
          </p>
        </section>

        <section className="info-section">
          <h2>Key Features</h2>
          <ul className="feature-list">
            <li><strong>Host Monitoring:</strong> Monitor servers, workstations, and network devices</li>
            <li><strong>Service Monitoring:</strong> Track HTTP, SMTP, SSH, and other services</li>
            <li><strong>Network Monitoring:</strong> Monitor network protocols and bandwidth</li>
            <li><strong>Alerting:</strong> Email, SMS, and custom notification methods</li>
            <li><strong>Performance Graphs:</strong> Historical data and trending</li>
            <li><strong>Web Interface:</strong> Comprehensive dashboard and reporting</li>
            <li><strong>Plugin Architecture:</strong> Extensible with custom plugins</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>Core Components</h2>
          <ul className="components-list">
            <li><strong>Nagios Core:</strong> The monitoring engine that performs checks</li>
            <li><strong>Nagios Plugins:</strong> Executables that perform actual monitoring checks</li>
            <li><strong>NRPE (Nagios Remote Plugin Executor):</strong> Allows remote execution of plugins</li>
            <li><strong>NSCA (Nagios Service Check Acceptor):</strong> Passive check receiver</li>
            <li><strong>NDOUtils:</strong> Database utilities for storing configuration and status data</li>
            <li><strong>Web Interface:</strong> CGI-based web UI for viewing status and configuration</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>Monitoring Types</h2>
          <div className="monitoring-types">
            <div className="monitoring-type">
              <h3>Active Checks</h3>
              <p>Nagios initiates checks by executing plugins at regular intervals</p>
            </div>
            <div className="monitoring-type">
              <h3>Passive Checks</h3>
              <p>External applications send results to Nagios via NSCA or command file</p>
            </div>
            <div className="monitoring-type">
              <h3>SNMP Monitoring</h3>
              <p>Monitor network devices using SNMP protocol</p>
            </div>
          </div>
        </section>

        <section className="info-section">
          <h2>Example Configuration</h2>
          <div className="code-block">
            <pre>{`# Host Definition
define host{
    use                     linux-server
    host_name               web-server-01
    alias                   Web Server 01
    address                 192.168.1.10
    check_command           check-host-alive
    max_check_attempts      3
    notification_interval   60
    contact_groups          admins
}

# Service Definition
define service{
    use                     generic-service
    host_name               web-server-01
    service_description     HTTP
    check_command           check_http
    check_interval          5
    retry_interval          1
    notification_interval   30
    contact_groups          admins
}

# Contact Definition
define contact{
    contact_name            admin
    alias                   System Administrator
    email                   admin@example.com
    service_notification_period  24x7
    host_notification_period     24x7
}`}</pre>
          </div>
        </section>

        <section className="info-section">
          <h2>Nagios Variants</h2>
          <ul className="variants-list">
            <li><strong>Nagios Core:</strong> Free, open-source version with basic features</li>
            <li><strong>Nagios XI:</strong> Commercial version with enhanced UI and features</li>
            <li><strong>Nagios Log Server:</strong> Centralized log management solution</li>
            <li><strong>Nagios Network Analyzer:</strong> Network traffic analysis and monitoring</li>
            <li><strong>Nagios Fusion:</strong> Multi-site monitoring and management</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>Use Cases</h2>
          <ul className="use-cases-list">
            <li>Server uptime and availability monitoring</li>
            <li>Application and service health checks</li>
            <li>Network device monitoring (routers, switches)</li>
            <li>Database performance monitoring</li>
            <li>Website and web application monitoring</li>
            <li>Disk space and resource utilization tracking</li>
            <li>Security event monitoring</li>
            <li>Infrastructure capacity planning</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>Best Practices</h2>
          <ul className="best-practices-list">
            <li>Configure proper notification escalation policies</li>
            <li>Use host and service dependencies to reduce alert noise</li>
            <li>Implement proper check intervals based on criticality</li>
            <li>Use templates for consistent configuration</li>
            <li>Regularly review and tune alert thresholds</li>
            <li>Document custom plugins and configurations</li>
            <li>Set up redundant monitoring for critical systems</li>
            <li>Use NRPE securely with proper authentication</li>
            <li>Regularly backup Nagios configuration files</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Nagios

