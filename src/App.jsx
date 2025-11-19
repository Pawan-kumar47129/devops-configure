import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Terraform from './components/Terraform'
import Ansible from './components/Ansible'
import Nagios from './components/Nagios'
import Home from './components/Home'
import './App.css'

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.3
    }
  }
}

function Navigation() {
  const location = useLocation()
  
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="nav-container">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="nav-logo">
            DevOps Tools
          </Link>
        </motion.div>
        <ul className="nav-menu">
          <li>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
              >
                Home
              </Link>
            </motion.div>
          </li>
          <li>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link 
                to="/terraform" 
                className={location.pathname === '/terraform' ? 'nav-link active' : 'nav-link'}
              >
                Terraform
              </Link>
            </motion.div>
          </li>
          <li>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link 
                to="/ansible" 
                className={location.pathname === '/ansible' ? 'nav-link active' : 'nav-link'}
              >
                Ansible
              </Link>
            </motion.div>
          </li>
          <li>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link 
                to="/nagios" 
                className={location.pathname === '/nagios' ? 'nav-link active' : 'nav-link'}
              >
                Nagios
              </Link>
            </motion.div>
          </li>
        </ul>
      </div>
    </motion.nav>
  )
}

function App() {
  const location = useLocation()

  return (
    <div className="app">
      <Navigation />
      <main className="main-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Home />
              </motion.div>
            } />
            <Route path="/terraform" element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Terraform />
              </motion.div>
            } />
            <Route path="/ansible" element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Ansible />
              </motion.div>
            } />
            <Route path="/nagios" element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Nagios />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </main>
      <motion.footer 
        className="footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p>&copy; 2024 DevOps Tools Website. All rights reserved.</p>
      </motion.footer>
    </div>
  )
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default AppWrapper

