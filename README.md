# 🍽️ What to Eat Today?

<img src="./2.png" alt="What to Eat Today Logo" width="100" height="100">


**What to Eat Today?** is a full-stack web application that helps users decide what to eat by randomly selecting a dish from a user-generated list. Users can add, edit, and delete dishes, view them with descriptions and images, and filter or sort based on various criteria.

---

## 🌟 Features

- 🍲 **Add a Dish**: Users can add a new dish with details like name, image, description, category, and rating.
- 🎲 **Random Dish Selection**: The app can randomly select a dish to help users decide what to eat.
- 🧹 **Filter and Sort**: Users can filter dishes by category or sort them by name, date added, or rating.
- 💾 **Persistent Storage**: All dishes are stored in a MongoDB database, ensuring that data persists even after page refreshes.
- 🎨 **Frontend & Backend Separation**: The frontend is built with React and styled with Bootstrap, while the backend is an Express server that connects to MongoDB.

---

## 🛠️ Technologies Used

- **Frontend**: React, Bootstrap, Framer Motion (for animations)
- **Backend**: Node.js, Express, Mongoose, MongoDB
- **Styling**: Custom CSS with Bootstrap

---

## 🚀 Getting Started

### Prerequisites

To run this application, you need to have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14+)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance, e.g., MongoDB Atlas)

### Installation

1. **📂 Clone the repository**:
   ```bash
   git clone <repository_url>
   cd what-2-eat


2. **🔧 Setup Backend**:

    ```bash
    cd backend

* Navigate to the backend folder:
    ```bash
    npm install

* Create a .env file in the backend directory with your MongoDB URI:
    ```bash
    MONGO_URI=mongodb://localhost:27017/what_to_eat
    PORT=5001

* Start the backend server:
    ```bash
    npm start


3. **💻 Setup Frontend**:
    
* Navigate to the frontend folder:
    ```bash
    cd ../frontend

* Install frontend dependecies:
    ```bash
    npm install

* start the frontend server:
    ```bash
    npm start

* The app will be available at http://localhost:3000.


## 📖 Usage

- **➕ Add Dishes**: Fill in the form to add a new dish, including name, description, category, and an optional image. Click "Add" to save.
- **📜 View Dishes**: All dishes appear in a list view with images, descriptions, categories, and ratings.
- **🎲 Select a Random Dish**: Click the "What to eat today?" button to get a random dish recommendation.
- **✏️Edit & 🗑️ Delete**: Each dish has edit and delete buttons for easy management.
- **🔍 Filter & Sort**: Use the dropdowns to filter by category or sort by different criteria.

## 📬 API Endpoints

- **GET /api/dishes** - Retrieve all dishes
- **POST /api/dishes** - Add a new dish
- **PUT /api/dishes/:id** - Update a dish by ID
- **DELETE /api/dishes/:id** - Delete a dish by ID


## Enjoy your meal planning with What to Eat Today? 🍽️ Bon appétit!

