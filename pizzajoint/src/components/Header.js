import React from 'react';
import { motion } from 'framer-motion';

const headerVariants = {
  initial: {
    opacity: 0,
    scale: 1,
    rotate: -90,
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.75
    }
  },
  whileHover: {
    scale: 1.1,
  },
}

const svgVariants = {
  initial: {
    opacity: 0,
    scale: 1,
  },
  animate: {
    opacity: 1,
    scale: [1.2, 0.7, 1.1, 1],
  }
}

const pathVariants = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
}

const Header = () => {
  return (
    <header>
      <motion.div className="logo"
        variants={headerVariants}
        initial="initial"
        animate="animate"
        whileHover="whileHover"
        drag
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        dragElastic={0.25}
      >
        <motion.svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
          variatns={svgVariants}
          initial="initial"
          animate="animate"
        >
          <motion.path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            variants={pathVariants}
            initial="initial"
            animate="animate"
          />
          <motion.path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            variants={pathVariants}
            initial="initial"
            animate="animate"
          />
        </motion.svg>
      </motion.div>
      <motion.div className="title"
        initial={{ opacity: 0, y: '-10vh' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
      >
        <h1>
          Pizza Joint
        </h1>
      </motion.div>
    </header>
  )
}

export default Header;