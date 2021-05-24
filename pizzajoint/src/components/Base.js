import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  initial: {
    y: '-1vh', opacity: 0
  },
  animate: {
    y: 0, opacity: 1,
    transition: {
      delay: '0.2', duration: '0.2', type: 'tween'
    }
  }
}

const liVariants = {
  initial: {
    x: '-1.5vw', opacity: 0,
  },
  animate: {
    x: 0, opacity: 1,
    transition: { duration: 0.025, type: 'spring', stiffness: 75 },
  },
  whileHover: {
    originX: 0, scale: 1.05
  },
}

const buttonVariants = {
  initial: {
    x: '-0.5vw', opacity: 0
  },
  animate: {
    x: 0, opacity: 1,
    transition: { duration: 0.2 }
  },
  whileHover: {
    scale: 1.05, boxShadow: '0px 0px 8px rgba(255, 255, 255, 1)'
  },
}

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
              variants={liVariants}
              initial="initial"
              animate="animate"
              whileHover="whileHover"
              transition="transition"
            >
              <motion.span className={spanClass}>
                {base}
              </motion.span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <div className="next">
          <Link to="/toppings">
            <motion.button
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover="whileHover"
            >
              Next
            </motion.button>
          </Link>
        </div>
      )}

    </motion.div>
  )
}

export default Base;