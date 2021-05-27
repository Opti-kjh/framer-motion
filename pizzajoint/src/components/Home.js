import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  initial: {
    y: '-10vh', opacity: 0
  },
  animate: {
    y: 1, opacity: 1,
    transition: {
      ease: 'easeIn',
      delay: 0.5,
      duration: 0.15
    }
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeIn'
    }
  }
}

const h2Variants = {
  initial: {
    opacity: 1, scale: 1
  },
  animate: {
    opacity: 1, scale: 1.5,
  }
}

const buttonVariants = {
  initial: {
    scale: 1, backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  animate: {
    scale: 1.1,
    transition: {
      delay: 0.5, duration: 0.5
    }
  },
  whileHover: {
    backgroundColor: 'rgba(255, 255, 255, 0.025)', boxShadow: '0px 0px 8px rgba(255, 255, 255, 1)'
  },
  whileTap: {
    color: 'rgba(0, 0, 0, 1)', backgroundColor: 'rgba(255, 255, 255, 1)', boxShadow: '0px 0px 8px rgba(0, 0, 0, 1)'
  }
}

const Home = () => {
  return (
    <motion.div className="home container"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.h2
        variants={h2Variants}
        initial="initial"
        animate="animate"
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          whileTap="whileTap"
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div >
  )
}

export default Home;