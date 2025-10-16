import { motion } from 'framer-motion'
import './Sponsorships.css'

function Sponsorships() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  const tiers = [
    {
      name: 'Bronze',
      icon: '🥉',
      price: '$500',
      benefits: [
        'Logo on event materials',
        'Social media mention',
        'Website recognition',
        'Community appreciation'
      ],
      color: '#cd7f32'
    },
    {
      name: 'Silver',
      icon: '🥈',
      price: '$1,000',
      benefits: [
        'All Bronze benefits',
        'Promotional booth space',
        'Featured sponsor section',
        'Event announcements',
        'Email newsletter feature'
      ],
      color: '#c0c0c0',
      featured: true
    },
    {
      name: 'Gold',
      icon: '🥇',
      price: '$2,500',
      benefits: [
        'All Silver benefits',
        'Premium booth location',
        'Speaking opportunity',
        'Event naming rights',
        'Exclusive partnership recognition'
      ],
      color: '#ffd700'
    }
  ]

  return (
    <div className="sponsorships">
      <motion.section 
        className="sponsorships-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Become a Sponsor
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Partner with us to make a meaningful impact in the Oakdale community
        </motion.p>
      </motion.section>

      <motion.section className="why-sponsor" {...fadeInUp}>
        <h2>Why Sponsor The Oaklight Project?</h2>
        <div className="reasons-grid">
          <motion.div 
            className="reason-card"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="reason-icon">🎯</div>
            <h3>Community Impact</h3>
            <p>Support meaningful events that bring joy and connection to hundreds of community members</p>
          </motion.div>
          <motion.div 
            className="reason-card"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="reason-icon">👥</div>
            <h3>Brand Visibility</h3>
            <p>Reach local audiences through our events, social media, and community channels</p>
          </motion.div>
          <motion.div 
            className="reason-card"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="reason-icon">💡</div>
            <h3>Youth Support</h3>
            <p>Empower student-led initiatives and show your commitment to the next generation</p>
          </motion.div>
          <motion.div 
            className="reason-card"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="reason-icon">🤝</div>
            <h3>Partnership</h3>
            <p>Build lasting relationships and demonstrate corporate social responsibility</p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section className="tiers-section" {...fadeInUp}>
        <h2>Sponsorship Tiers</h2>
        <div className="tiers-grid">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`tier-card ${tier.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {tier.featured && <div className="featured-badge">Most Popular</div>}
              <div className="tier-icon" style={{ color: tier.color }}>{tier.icon}</div>
              <h3>{tier.name}</h3>
              <div className="tier-price">{tier.price}</div>
              <ul className="benefits-list">
                {tier.benefits.map((benefit, i) => (
                  <li key={i}>
                    <span className="check-icon">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <motion.button
                className="tier-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Choose {tier.name}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section className="custom-sponsor" {...fadeInUp}>
        <h2>Custom Sponsorship</h2>
        <p>
          Have a specific vision or budget in mind? We're happy to create a custom 
          sponsorship package tailored to your organization's goals and values.
        </p>
        <motion.button
          className="custom-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us for Custom Package
        </motion.button>
      </motion.section>

      <motion.section className="current-sponsors" {...fadeInUp}>
        <h2>Our Sponsors</h2>
        <p className="sponsors-intro">
          We're grateful for the support of our sponsors who share our vision 
          for a vibrant Oakdale community.
        </p>
        <div className="sponsors-placeholder">
          <p>Interested in being our first sponsor?</p>
          <p>Your logo could be here!</p>
        </div>
      </motion.section>
    </div>
  )
}

export default Sponsorships
