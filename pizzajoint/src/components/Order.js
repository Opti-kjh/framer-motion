import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  initial: {
    y: '-10vh', opacity: 0
  },
  animate: {
    y: 1, opacity: 1,
    transition: {
      ease: 'easeIn',
      delay: 0.5
    }
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeIn'
    }
  }
}

const childVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      type: 'spring',
      // delay: 0.5,
      mass: 0.8,
      damping: 8,
      when: 'beforeChildren',
      staggerChildren: 0.8
    }
  },
  whileHover: {
    scale: 1.1,
    transition: {
      yoyo: Infinity,
      duration: 0.2
    }
  }
}

const Order = ({ pizza, setShowModal }) => {

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
    }, 1250)
  }, [setShowModal])

  return (
    <AnimatePresence>
      <motion.div className="container order"
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <h2>Thank you for your order</h2>
        <p>You ordered a <span>{pizza.base}</span> pizza with:</p>
        <motion.ul
          variants={childVariants}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
        >
          {pizza.toppings.map(topping => <li key={topping}>{topping}</li>)}
        </motion.ul>
      </motion.div>
    </AnimatePresence>
  )
}

export default Order;