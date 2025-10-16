import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Landing.css'

function Landing() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="landing">
      <motion.section 
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <motion.h1
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
          >
            Welcome to The Oaklight Project
          </motion.h1>
          <motion.p
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.4 }}
            className="hero-subtitle"
          >
            Bringing unique and exciting activities to the Oakdale community
          </motion.p>
          <motion.div
            className="hero-buttons"
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.6 }}
          >
            <Link to="/events" className="btn btn-primary">
              <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Explore Events
              </motion.span>
            </Link>
            <Link to="/about" className="btn btn-secondary">
              <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Learn More
              </motion.span>
            </Link>
          </motion.div>
        </div>
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
      </motion.section>

      <motion.section 
        className="features"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="feature-card" variants={fadeIn}>
          <div className="feature-icon">🎯</div>
          <h3>Our Mission</h3>
          <p>Creating memorable experiences for the Oakdale community through innovative and engaging events</p>
        </motion.div>
        <motion.div className="feature-card" variants={fadeIn}>
          <div className="feature-icon">🤝</div>
          <h3>Community First</h3>
          <p>Built by students, for the community, with a focus on bringing people together</p>
        </motion.div>
        <motion.div className="feature-card" variants={fadeIn}>
          <div className="feature-icon">✨</div>
          <h3>Unique Events</h3>
          <p>From tournaments to social gatherings, we organize activities that stand out</p>
        </motion.div>
      </motion.section>

      <motion.section 
        className="cta-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Ready to Get Involved?</h2>
        <p>Join us in making Oakdale a more vibrant community</p>
        <Link to="/contact" className="btn btn-primary">
          <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Get in Touch
          </motion.span>
        </Link>
      </motion.section>
    </div>
  )
}

export default Landing
