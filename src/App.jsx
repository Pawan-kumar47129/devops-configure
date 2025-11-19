import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import Terraform from './components/Terraform'
import Ansible from './components/Ansible'
import Nagios from './components/Nagios'
import Home from './components/Home'
import './App.css'

function Navigation() {
  const location = useLocation()
  
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          DevOps Tools
        </Link>
        <ul className="nav-menu">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/terraform" className={location.pathname === '/terraform' ? 'nav-link active' : 'nav-link'}>
              Terraform
            </Link>
          </li>
          <li>
            <Link to="/ansible" className={location.pathname === '/ansible' ? 'nav-link active' : 'nav-link'}>
              Ansible
            </Link>
          </li>
          <li>
            <Link to="/nagios" className={location.pathname === '/nagios' ? 'nav-link active' : 'nav-link'}>
              Nagios
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terraform" element={<Terraform />} />
            <Route path="/ansible" element={<Ansible />} />
            <Route path="/nagios" element={<Nagios />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2024 DevOps Tools Website. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App

