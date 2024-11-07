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

  const handleAddDish = () => {
    if (dish.trim() !== '') {
      onAddDish({ name: dish, image, description, category }); // Add category to dish object
      setDish('');
      setImage(null);
      setDescription('');
      setCategory('');
    }
    else {
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




