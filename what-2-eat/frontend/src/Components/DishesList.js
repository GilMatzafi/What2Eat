import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactStars from 'react-rating-stars-component';

const DishesList = ({ filteredDishes, handleRatingChange, editDish, deleteDish }) => {
  return (
    <div className="dishes-grid">
      <AnimatePresence>
        {filteredDishes.map((dish, index) => (
          <motion.div
            key={index}
            className="dish-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {dish.image && (
              <img src={dish.image} alt={dish.name} className="dish-image" />
            )}
            <div className="dish-content">
              <div className="dish-header">
                <span className="dish-name">{dish.name}</span>
                <span className={`badge badge-${dish.category.toLowerCase()}`}>
                  {dish.category}
                </span>
              </div>
              {dish.description && <p className="dish-description">{dish.description}</p>}
              <ReactStars
                count={5}
                size={20}
                value={dish.rating}
                onChange={(newRating) => handleRatingChange(index, newRating)}
                activeColor="#ffd700"
              />
              <div className="button-group mt-2">
                <button className="btn btn-sm btn-warning me-2" onClick={() => editDish(index, dish)}>
                  Edit
                </button>
                <button className="btn btn-sm btn-danger" onClick={() => deleteDish(index)}>
                  Delete
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default DishesList;



