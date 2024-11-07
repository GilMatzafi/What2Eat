// ChosenDishCard.js
import React from 'react';
import { motion } from 'framer-motion';
import ReactStars from 'react-rating-stars-component';

const ChosenDishCard = ({ dish }) => {
  return (
    <motion.div
      className="chosen-dish-card"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h5 className="card-title">Chosen Dish</h5>
      <p className="chosen-dish-name">{dish.name}</p>
      {dish.image && <img src={dish.image} alt={dish.name} className="chosen-dish-image" />}
      {dish.description && <p className="chosen-dish-description">{dish.description}</p>}
      <div className="chosen-dish-date">Added Date: {new Date(dish.addedAt).toLocaleDateString()}</div>
      <ReactStars
        count={5}
        size={24}
        value={dish.rating}
        edit={false}
        activeColor="#ffd700"
      />
    </motion.div>
  );
};

export default ChosenDishCard;

