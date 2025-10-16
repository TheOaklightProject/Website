import { motion } from 'framer-motion'
import './Events.css'

function Events() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  const events = [
    {
      id: 1,
      title: 'Community Game Night',
      date: 'Every Friday',
      description: 'Join us for an evening of board games, card games, and friendly competition.',
      category: 'Recurring',
      icon: '🎮'
    },
    {
      id: 2,
      title: 'Oakdale Sports Tournament',
      date: 'Coming Soon',
      description: 'Annual sports tournament featuring basketball, soccer, and volleyball competitions.',
      category: 'Annual',
      icon: '⚽'
    },
    {
      id: 3,
      title: 'Community Art Exhibition',
      date: 'Quarterly',
      description: 'Showcase local talent and creativity in our community art gallery.',
      category: 'Quarterly',
      icon: '🎨'
    },
    {
      id: 4,
      title: 'Music & Food Festival',
      date: 'Summer 2026',
      description: 'A celebration of local music and cuisine bringing the community together.',
      category: 'Special',
      icon: '🎵'
    },
    {
      id: 5,
      title: 'Movie Under the Stars',
      date: 'Monthly',
      description: 'Outdoor movie screenings with popcorn and community spirit.',
      category: 'Monthly',
      icon: '🎬'
    },
    {
      id: 6,
      title: 'Tech & Innovation Fair',
      date: 'Fall 2026',
      description: 'Explore the latest in technology and innovation from student projects.',
      category: 'Annual',
      icon: '💡'
    }
  ]

  return (
    <div className="events">
      <motion.section 
        className="events-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our Events
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Discover upcoming and recurring events that bring our community together
        </motion.p>
      </motion.section>

      <motion.section className="events-grid" {...fadeInUp}>
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            className="event-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="event-icon">{event.icon}</div>
            <div className="event-category">{event.category}</div>
            <h3>{event.title}</h3>
            <div className="event-date">
              <span className="date-icon">📅</span>
              {event.date}
            </div>
            <p>{event.description}</p>
            <motion.button 
              className="event-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </motion.section>

      <motion.section className="events-cta" {...fadeInUp}>
        <h2>Want to Organize an Event?</h2>
        <p>We're always looking for new ideas and collaborators</p>
        <motion.button 
          className="cta-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Propose an Event
        </motion.button>
      </motion.section>
    </div>
  )
}

export default Events
