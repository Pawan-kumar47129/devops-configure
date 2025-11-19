import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AWSAnimation from './AWSAnimation'
import ParticleBackground from './ParticleBackground'
import AnimatedCounter from './AnimatedCounter'
import './Home.css'

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
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  hover: {
    scale: 1.05,
    y: -10,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
}

function Home() {
  return (
    <div className="home">
      <ParticleBackground />
      <motion.section 
        className="hero"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="hero-content" variants={itemVariants}>
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              className="title-word"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              DevOps
            </motion.span>
            <motion.span 
              className="title-word"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Tools
            </motion.span>
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Infrastructure as Code, Configuration Management, and Monitoring
          </motion.p>
          <motion.div 
            className="hero-badges"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span 
              className="badge"
              variants={itemVariants}
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              ☁️ Cloud
            </motion.span>
            <motion.span 
              className="badge"
              variants={itemVariants}
              whileHover={{ scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              ⚡ Automation
            </motion.span>
            <motion.span 
              className="badge"
              variants={itemVariants}
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              📊 Monitoring
            </motion.span>
          </motion.div>
        </motion.div>
        <div className="floating-shapes">
          <motion.div 
            className="shape shape-1"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="shape shape-2"
            animate={{
              y: [0, 30, 0],
              x: [0, -20, 0],
              rotate: [0, -180, -360]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="shape shape-3"
            animate={{
              y: [0, -20, 0],
              x: [0, 15, 0],
              rotate: [0, 120, 240, 360]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      </motion.section>

      <AWSAnimation />

      <motion.section 
        className="tools-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div 
          className="tool-card"
          variants={cardVariants}
          whileHover="hover"
          whileTap={{ scale: 0.98 }}
        >
          <div className="card-glow"></div>
          <motion.div 
            className="tool-icon terraform-icon"
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="icon-wrapper">🚀</div>
          </motion.div>
          <h2>Terraform</h2>
          <p>Infrastructure as Code tool for building, changing, and versioning infrastructure safely and efficiently.</p>
          <motion.div 
            className="card-features"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span 
              className="feature-tag"
              variants={itemVariants}
              whileHover={{ scale: 1.2, y: -3 }}
            >
              IaC
            </motion.span>
            <motion.span 
              className="feature-tag"
              variants={itemVariants}
              whileHover={{ scale: 1.2, y: -3 }}
            >
              Multi-Cloud
            </motion.span>
            <motion.span 
              className="feature-tag"
              variants={itemVariants}
              whileHover={{ scale: 1.2, y: -3 }}
            >
              State Management
            </motion.span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/terraform" className="card-button">
              <span>Learn More</span>
              <motion.span 
                className="button-arrow"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className="tool-card"
          variants={cardVariants}
          whileHover="hover"
          whileTap={{ scale: 0.98 }}
        >
          <div className="card-glow"></div>
          <motion.div 
            className="tool-icon ansible-icon"
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="icon-wrapper">⚙️</div>
          </motion.div>
          <h2>Ansible</h2>
          <p>Automation platform that makes IT operations simpler. Configuration management, application deployment, and orchestration.</p>
          <motion.div 
            className="card-features"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span 
              className="feature-tag"
              variants={itemVariants}
              whileHover={{ scale: 1.2, y: -3 }}
            >
              Agentless
            </motion.span>
            <motion.span 
              className="feature-tag"
              variants={itemVariants}
              whileHover={{ scale: 1.2, y: -3 }}
            >
              YAML
            </motion.span>
            <motion.span 
              className="feature-tag"
              variants={itemVariants}
              whileHover={{ scale: 1.2, y: -3 }}
            >
              Idempotent
            </motion.span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/ansible" className="card-button">
              <span>Learn More</span>
              <motion.span 
                className="button-arrow"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className="tool-card"
          variants={cardVariants}
          whileHover="hover"
          whileTap={{ scale: 0.98 }}
        >
          <div className="card-glow"></div>
          <motion.div 
            className="tool-icon nagios-icon"
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="icon-wrapper">📊</div>
          </motion.div>
          <h2>Nagios</h2>
          <p>Powerful monitoring system that enables organizations to identify and resolve IT infrastructure problems.</p>
          <motion.div 
            className="card-features"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span 
              className="feature-tag"
              variants={itemVariants}
              whileHover={{ scale: 1.2, y: -3 }}
            >
              Real-time
            </motion.span>
            <motion.span 
              className="feature-tag"
              variants={itemVariants}
              whileHover={{ scale: 1.2, y: -3 }}
            >
              Alerting
            </motion.span>
            <motion.span 
              className="feature-tag"
              variants={itemVariants}
              whileHover={{ scale: 1.2, y: -3 }}
            >
              Plugins
            </motion.span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/nagios" className="card-button">
              <span>Learn More</span>
              <motion.span 
                className="button-arrow"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section 
        className="features"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 
          className="section-title"
          variants={itemVariants}
        >
          <span className="title-line"></span>
          <span className="title-text">Why These Tools Matter</span>
          <span className="title-line"></span>
        </motion.h2>
        <motion.div 
          className="features-list"
          variants={containerVariants}
        >
          <motion.div 
            className="feature-item"
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="feature-icon"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              🤖
            </motion.div>
            <h3>Automation</h3>
            <p>Streamline your infrastructure management and reduce manual errors</p>
            <motion.div 
              className="feature-progress"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </motion.div>
          <motion.div 
            className="feature-item"
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="feature-icon"
              animate={{ 
                rotate: [0, -10, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              📈
            </motion.div>
            <h3>Scalability</h3>
            <p>Easily scale your infrastructure up or down based on demand</p>
            <motion.div 
              className="feature-progress"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.7 }}
            />
          </motion.div>
          <motion.div 
            className="feature-item"
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="feature-icon"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              🛡️
            </motion.div>
            <h3>Reliability</h3>
            <p>Monitor and maintain your systems with confidence</p>
            <motion.div 
              className="feature-progress"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.9 }}
            />
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
}

export default Home

