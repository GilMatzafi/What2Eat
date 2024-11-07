// App.js
import React, { useState, useEffect } from 'react';
import AddDish from './Components/AddDish';
import RandomDishButton from './Components/RandomDishButton';
import FilterSort from './Components/FilterSort';
import DishesList from './Components/DishesList';
import ChosenDishCard from './Components/ChosenDishCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [dishes, setDishes] = useState([]);
  const [randomDish, setRandomDish] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('name');
  const [selectedCategory, setSelectedCategory] = useState('');

    // הורדת כל המנות מה-Database בזמן טעינת הדף
    useEffect(() => {
      const fetchDishes = async () => {
        try {
          const response = await fetch('http://localhost:5001/api/dishes'); // כתובת ה-API
          if (!response.ok) {
            throw new Error('Failed to fetch dishes');
          }
          const data = await response.json();
          setDishes(data); // שמירת המנות ב-state
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      fetchDishes();
    }, []); // התלות הריקה [] מבטיחה שהבקשה תרוץ רק פעם אחת

  const addDish = (newDish) => {
    setDishes([...dishes, { ...newDish, addedAt: new Date(), rating: 0 }]);
  };

  const chooseRandomDish = (dish) => {
    setRandomDish(dish);
  };

  const deleteDish = (index) => {
    const updatedDishes = dishes.filter((_, i) => i !== index);
    setDishes(updatedDishes);
  };

  const handleCategorySelect = (e) => {
    setSelectedCategory(e.target.value);
  };

  const editDish = (index, updatedDish) => {
    const updatedDishes = [...dishes];
    updatedDishes[index] = updatedDish;
    setDishes(updatedDishes);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const handleRatingChange = (index, newRating) => {
    const updatedDishes = [...dishes];
    updatedDishes[index].rating = newRating;
    setDishes(updatedDishes);
  };

  const filteredDishes = dishes
    .filter(dish => 
      dish.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === '' || dish.category === selectedCategory)
    )
    .sort((a, b) => {
      if (sortOption === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortOption === 'recent') {
        return b.addedAt - a.addedAt;
      }
      return 0;
    });

  return (
    <div className="container mt-5">
      <h1 className="main-title">
        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
          What to Eat Today?
        </a>
      </h1>
      
      <AddDish onAddDish={addDish} />

      <FilterSort
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        selectedCategory={selectedCategory}
        handleCategorySelect={handleCategorySelect}
        handleSortChange={handleSortChange}
      />

      <h2 className="mt-4">Dishes List</h2>
      <DishesList
        dishes={dishes}
        filteredDishes={filteredDishes}
        handleRatingChange={handleRatingChange}
        editDish={editDish}
        deleteDish={deleteDish}
      />

      <RandomDishButton dishes={dishes} onChooseRandom={chooseRandomDish} />

      {randomDish && <ChosenDishCard dish={randomDish} />}
    </div>
  );
};

export default App;







