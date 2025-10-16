import { motion } from 'framer-motion'
import './About.css'

function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  return (
    <div className="about">
      <motion.section 
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About The Oaklight Project
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          A student-led initiative bringing unique experiences to Oakdale
        </motion.p>
      </motion.section>

      <motion.section className="about-content" {...fadeInUp}>
        <div className="content-card">
          <h2>Our Story</h2>
          <p>
            The Oaklight Project began as a vision among high school student friends who 
            wanted to create something special for their community. We saw an opportunity 
            to organize unique and exciting activities that would bring people together 
            in meaningful ways.
          </p>
          <p>
            What started as a simple idea has grown into a movement focused on creating 
            memorable experiences for the people of Oakdale. We believe in the power of 
            community and the impact that well-organized events can have on bringing 
            people closer together.
          </p>
        </div>
      </motion.section>

      <motion.section className="about-mission" {...fadeInUp}>
        <div className="mission-card">
          <div className="mission-icon">🎯</div>
          <h3>Our Mission</h3>
          <p>
            To enrich the Oakdale community by organizing innovative, engaging, and 
            memorable events that bring people together and create lasting connections.
          </p>
        </div>
        <div className="mission-card">
          <div className="mission-icon">👁️</div>
          <h3>Our Vision</h3>
          <p>
            We envision a vibrant Oakdale where community members regularly connect 
            through unique experiences that celebrate creativity, friendship, and shared joy.
          </p>
        </div>
      </motion.section>

      <motion.section className="about-values" {...fadeInUp}>
        <h2>Our Values</h2>
        <div className="values-grid">
          <motion.div 
            className="value-item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="value-number">01</div>
            <h4>Community First</h4>
            <p>Every decision we make prioritizes the wellbeing and enjoyment of our community members.</p>
          </motion.div>
          <motion.div 
            className="value-item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="value-number">02</div>
            <h4>Innovation</h4>
            <p>We constantly seek new and creative ways to engage and entertain our community.</p>
          </motion.div>
          <motion.div 
            className="value-item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="value-number">03</div>
            <h4>Inclusivity</h4>
            <p>Our events are designed to welcome everyone, regardless of age, background, or interests.</p>
          </motion.div>
          <motion.div 
            className="value-item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="value-number">04</div>
            <h4>Excellence</h4>
            <p>We strive for the highest quality in everything we do, from planning to execution.</p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section className="about-team" {...fadeInUp}>
        <h2>Student-Led Initiative</h2>
        <p className="team-intro">
          The Oaklight Project is proudly run by a group of dedicated high school students 
          who are passionate about making a positive impact in their community. Our team 
          brings together diverse skills, perspectives, and a shared commitment to creating 
          exceptional experiences for Oakdale.
        </p>
      </motion.section>
    </div>
  )
}

export default About
