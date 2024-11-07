const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middlewares
app.use(cors());
app.use(express.json());

// התחברות ל-MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// חיבור מסלול המנות
const dishesRouter = require(__dirname + '/dishes');
app.use('/api/dishes', dishesRouter);

// התחל את השרת
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

