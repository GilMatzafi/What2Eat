// AddDish.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';


const AddDish = ({ onAddDish }) => {
  const [dish, setDish] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(''); // State for category

  const handleInputChange = (e) => {
    setDish(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleAddDish = async () => {
    if (dish.trim() !== '') {
      const newDish = { name: dish, image, description, category };
      
      try {
        const response = await fetch('http://localhost:5001/api/dishes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newDish),
        });
  
        if (!response.ok) {
          throw new Error('Failed to add dish');
        }
  
        const addedDish = await response.json();
        onAddDish(addedDish); // להוסיף את המנה לרשימת המנות ב-Frontend
  
        // נקה את השדות לאחר הוספה מוצלחת
        setDish('');
        setImage(null);
        setDescription('');
        setCategory('');
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to add dish. Please try again.');
      }
    } else {
      alert('Please enter a dish name.');
    }
  };
  

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control mb-2"
        value={dish}
        onChange={handleInputChange}
        placeholder="insert dish name"
      />
      <input
        type="file"
        className="form-control mb-2"
        accept="image/*"
        onChange={handleImageChange}
      />
      <textarea
        className="form-control mb-2"
        value={description}
        onChange={handleDescriptionChange}
        placeholder="insert dish description"
        rows="2"
      />
      <select className="form-select mb-2" value={category} onChange={handleCategoryChange}>
        <option value="">choose category</option>
        <option value="salad">Salads</option>
        <option value="pasta">Pasta</option>
        <option value="meat">meat</option>
        <option value="dessert">dessert</option>
      </select>
      <motion.button
        className="add-button btn btn-primary"
        onClick={handleAddDish}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Add
      </motion.button>    </div>
  );
};

export default AddDish;




