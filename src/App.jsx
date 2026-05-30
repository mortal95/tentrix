import { motion } from 'framer-motion'
import { ShieldCheck, Server, ArrowRight } from 'lucide-react'

export default function App() {
  return (
    <div>
      <header className="navbar">
        <div className="logo">TENTRIX LTD</div>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </nav>
        <button>Get In Touch</button>
      </header>

      <section className="hero">
        <div className="hero-text">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Technology Solutions. Built Around You.
          </motion.h1>

          <p>
            Tentrix Ltd delivers IT consultancy and infrastructure management
            services for modern UK businesses.
          </p>

          <div className="hero-buttons">
            <button className="primary">Our Services</button>
            <button className="secondary">About Us</button>
          </div>
        </div>

        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop" />
        </div>
      </section>

      <section className="services">
        <h2>Smart Solutions for Modern Businesses</h2>

        <div className="cards">
          <div className="card">
            <ShieldCheck size={42} />
            <h3>IT Consultancy</h3>
            <p>
              Strategic guidance for digital transformation, cloud adoption,
              and secure operations.
            </p>
            <span>Learn More <ArrowRight size={16} /></span>
          </div>

          <div className="card">
            <Server size={42} />
            <h3>Infrastructure Management</h3>
            <p>
              Reliable management of servers, systems, and business IT environments.
            </p>
            <span>Learn More <ArrowRight size={16} /></span>
          </div>
        </div>
      </section>

      <section className="about">
        <div>
          <h2>Your Trusted Technology Partner</h2>
          <p>
            Tentrix Ltd helps businesses build secure and scalable digital environments
            with practical and modern IT solutions.
          </p>
        </div>

        <img src="https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=1200&auto=format&fit=crop" />
      </section>

      <footer>
        <div>
          <h3>TENTRIX LTD</h3>
          <p>Technology consultancy and infrastructure solutions.</p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>info@tentrix.co.uk</p>
          <p>United Kingdom</p>
        </div>
      </footer>
    </div>
  )
}