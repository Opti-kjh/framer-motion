import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const liVariants = {
  initial: {
    x: '-1.5vw', opacity: 0
  },
  animate: {
    x: 0, opacity: 1,
    transition: {
      delay: 0.5, duration: 0.025, type: 'spring', stiffness: 75
    }
  }
}

const buttonVariants = {
  initial: {
    x: '-0.5vw', opacity: 0
  },
  animate: {
    x: 0, opacity: 1,
    transition: {
      duration: 0.2
    }
  },
  whileHover: {
    scale: 1.05, boxShadow: '0px 0px 8px rgba(255, 255, 255, 1)'
  }
}

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <div className="toppings container">

      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
              variants={liVariants}
              initial="initial"
              animate="animate"
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
        >
          Order
        </motion.button>
      </Link>

    </div>
  )
}

export default Toppings;