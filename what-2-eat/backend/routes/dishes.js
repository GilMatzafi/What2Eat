const express = require('express');
const Dish = require('../models/Dish'); // מייבא את מודל המנה
const router = express.Router();

// מסלול לקבלת כל המנות
router.get('/', async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.json(dishes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// מסלול להוספת מנה חדשה
router.post('/', async (req, res) => {
  const dish = new Dish({
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
    category: req.body.category,
    rating: req.body.rating,
  });

  try {
    const newDish = await dish.save();
    res.status(201).json(newDish);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// מסלול לעדכון מנה קיימת
router.put('/:id', async (req, res) => {
  try {
    const updatedDish = await Dish.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedDish);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// מסלול למחיקת מנה
router.delete('/:id', async (req, res) => {
  try {
    await Dish.findByIdAndDelete(req.params.id);
    res.json({ message: 'Dish deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
