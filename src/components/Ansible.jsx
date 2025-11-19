import './Ansible.css'

function Ansible() {
  return (
    <div className="tool-page">
      <div className="page-header">
        <h1>Ansible</h1>
        <p className="page-subtitle">Automation Platform</p>
      </div>

      <div className="content-section">
        <section className="info-section">
          <h2>What is Ansible?</h2>
          <p>
            Ansible is an open-source automation platform that simplifies configuration management, 
            application deployment, task automation, and IT orchestration. It uses a simple YAML-based 
            language (Ansible Playbooks) to describe automation jobs, making it easy to learn and use.
          </p>
        </section>

        <section className="info-section">
          <h2>Key Features</h2>
          <ul className="feature-list">
            <li><strong>Agentless:</strong> No agents required on managed nodes</li>
            <li><strong>Simple YAML Syntax:</strong> Human-readable playbooks</li>
            <li><strong>Idempotent:</strong> Safe to run multiple times</li>
            <li><strong>Extensible:</strong> Large collection of modules and plugins</li>
            <li><strong>SSH-based:</strong> Uses SSH for communication (no additional ports)</li>
            <li><strong>Multi-Platform:</strong> Works on Linux, Unix, Windows, and network devices</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>Core Components</h2>
          <ul className="components-list">
            <li><strong>Control Node:</strong> Machine where Ansible is installed and run from</li>
            <li><strong>Managed Nodes:</strong> Servers/devices being managed by Ansible</li>
            <li><strong>Inventory:</strong> List of managed nodes organized into groups</li>
            <li><strong>Playbooks:</strong> YAML files containing automation tasks</li>
            <li><strong>Modules:</strong> Reusable units of code that perform specific tasks</li>
            <li><strong>Roles:</strong> Reusable collections of playbooks, variables, and files</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>Example Playbook</h2>
          <div className="code-block">
            <pre>{`---
- name: Install and configure Nginx
  hosts: webservers
  become: yes
  tasks:
    - name: Install Nginx
      apt:
        name: nginx
        state: present
        update_cache: yes

    - name: Start and enable Nginx
      systemd:
        name: nginx
        state: started
        enabled: yes

    - name: Copy custom index page
      copy:
        src: index.html
        dest: /var/www/html/index.html
        mode: '0644'
      notify: restart nginx

  handlers:
    - name: restart nginx
      systemd:
        name: nginx
        state: restarted`}</pre>
          </div>
        </section>

        <section className="info-section">
          <h2>Use Cases</h2>
          <ul className="use-cases-list">
            <li>Configuration management across multiple servers</li>
            <li>Application deployment and updates</li>
            <li>Security patching and compliance</li>
            <li>Cloud provisioning and orchestration</li>
            <li>Network device configuration</li>
            <li>Continuous delivery pipelines</li>
            <li>Disaster recovery automation</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>Ansible Tower/AWX</h2>
          <p>
            Ansible Tower (commercial) and AWX (open-source) provide a web-based UI, REST API, 
            and role-based access control for Ansible. They offer features like:
          </p>
          <ul className="tower-features">
            <li>Centralized job scheduling</li>
            <li>Visual workflow editor</li>
            <li>Real-time job status and logs</li>
            <li>Inventory management</li>
            <li>Credential management</li>
            <li>Audit trails and compliance reporting</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>Best Practices</h2>
          <ul className="best-practices-list">
            <li>Use roles to organize playbooks logically</li>
            <li>Store sensitive data in Ansible Vault</li>
            <li>Use tags to run specific tasks</li>
            <li>Keep playbooks idempotent</li>
            <li>Use handlers for service restarts</li>
            <li>Version control all playbooks and roles</li>
            <li>Test playbooks in staging before production</li>
            <li>Use inventory variables for environment-specific configs</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Ansible

