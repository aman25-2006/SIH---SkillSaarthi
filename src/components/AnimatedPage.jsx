import { motion } from 'framer-motion'
import { pageContainer } from './motion'

function AnimatedPage({ children, className = '' }) {
  return (
    <motion.main
      variants={pageContainer}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children}
    </motion.main>
  )
}

export default AnimatedPage
