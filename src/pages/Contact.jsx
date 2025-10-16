import { motion } from 'framer-motion'
import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  return (
    <div className="contact">
      <motion.section 
        className="contact-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          We'd love to hear from you. Reach out with questions, suggestions, or collaboration ideas
        </motion.p>
      </motion.section>

      <div className="contact-container">
        <motion.section className="contact-info" {...fadeInUp}>
          <h2>Contact Information</h2>
          <div className="info-cards">
            <motion.div 
              className="info-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p>contact@oaklightproject.org</p>
            </motion.div>
            <motion.div 
              className="info-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="info-icon">📍</div>
              <h3>Location</h3>
              <p>Oakdale, CA</p>
            </motion.div>
            <motion.div 
              className="info-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="info-icon">🕒</div>
              <h3>Response Time</h3>
              <p>Within 24-48 hours</p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section className="contact-form-section" {...fadeInUp}>
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What is this about?"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell us more..."
              />
            </div>
            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.section>
      </div>

      <motion.section className="social-section" {...fadeInUp}>
        <h2>Connect with Us</h2>
        <div className="social-links">
          <motion.a 
            href="#" 
            className="social-link"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="social-icon">📘</span>
            <span>Facebook</span>
          </motion.a>
          <motion.a 
            href="#" 
            className="social-link"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="social-icon">📸</span>
            <span>Instagram</span>
          </motion.a>
          <motion.a 
            href="#" 
            className="social-link"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="social-icon">🐦</span>
            <span>Twitter</span>
          </motion.a>
        </div>
      </motion.section>
    </div>
  )
}

export default Contact
