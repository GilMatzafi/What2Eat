import React from 'react';
import { motion } from 'framer-motion';
import { FaQuestionCircle } from 'react-icons/fa'; // אייקון סימן שאלה

const RandomDishButton = ({ dishes, onChooseRandom }) => {
  const handleChooseRandom = () => {
    if (dishes.length > 0) {
      const randomIndex = Math.floor(Math.random() * dishes.length);
      onChooseRandom(dishes[randomIndex]);
    } else {
      alert("No dishes available to choose from!");
    }
  };

  return (
    <motion.button
      className="random-dish-button btn w-100"
      onClick={handleChooseRandom}
      whileHover={{ scale: 1.05, backgroundColor: "#21867a" }}
      whileTap={{ scale: 0.95 }}
    >
      <FaQuestionCircle className="me-2" /> {/* אייקון של סימן שאלה */}
      What to eat today?
    </motion.button>
  );
};

export default RandomDishButton;


