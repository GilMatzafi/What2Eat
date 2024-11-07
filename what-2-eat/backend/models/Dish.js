const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  rating: { type: Number, default: 0 },
  addedAt: { type: Date, default: Date.now },
  image: String, // לינק לתמונה אם קיים
});

module.exports = mongoose.model('Dish', dishSchema);

