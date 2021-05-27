import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdrop = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  }
}

const modal = {
  initial: {
    y: '-100vh',
    opacity: 0
  },
  animate: {
    y: '200px',
    opacity: 1,
    transition: { delay: 0.5 }
  }
}

{/*
const usersVariants = {
  initial: {
    opacity: 0,
    x: '-1vw',
    marginTop: '10px'
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
      duration: 0.3,
    }
  },
  whileHover: {
    scale: 1.1,
    transition: { delay: 0.125, duration: 0.125 }
  }
}

const users = [
  {
    name: 'a',
    age: 41,
  },
  {
    name: 'b',
    age: 43,
  },
  {
    name: 'c',
    age: 48,
  },
  {
    name: 'd',
    age: 43,
  }
];

const orderList = users.map((users, pizza) => (
  <motion.li key={users.name.toString()}
    variants={usersVariants}
    whileHover="whileHover"
  >
    <strong className="users-name">
      name: {users.name},
    </strong>
    <span>
      age: {users.age}
    </span>
  </motion.li>
));
*/}

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div className="backdrop"
          variants={backdrop}
          initial="initial"
          animate="animate"
          exit="initial"
        >
          <motion.div className="modal"
            variants={modal}
            initial="initial"
            animate="animate"
            exit="initial"
          >
            <p>Want to make another pizza?</p>
            {/*
            <motion.ul
              className="users-list"
              variants={usersVariants}
              initial="initial"
              animate="animate"
            >
              {orderList}
            </motion.ul>
          */}
            <Link to="/">
              <button onClick={() => setShowModal(false)}>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal;