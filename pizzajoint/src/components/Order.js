import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  initial: {
    y: '5vh',
    borderRadius: '15px'
  },
  animate: {
    y: 0,
    borderRadius: '15px',
    padding: '25px'
  },
  whileHover: {
    borderRadius: '15px',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    cursor: 'pointer'
  }
}

const childVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
  },
  whileHover: {
    fontWeight: 'bold',
    scale: 1.2
  }
}

const Order = ({ pizza }) => {
  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      whileHover="whileHover"
    >
      <h2>Thank you for your order</h2>
      <motion.p
        variants={childVariants}
        initial="initial"
        animate="animate"
        whileHover="whileHover"
      >
        You ordered a {pizza.base} pizza with:
        </motion.p>
      <motion.div
        variants={childVariants}
        initial="initial"
        animate="animate"
        whileHover="whileHover"
      >
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;