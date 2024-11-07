// FilterSort.js
import React from 'react';
import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai';

const FilterSort = ({ searchQuery, handleSearchChange, selectedCategory, handleCategorySelect, handleSortChange }) => {
  return (
    <div className="mb-3 button-group">
      <input
        type="text"
        className="form-control mb-2"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search by name"
      />
      <select className="form-select mb-2 filter-dropdown" value={selectedCategory} onChange={handleCategorySelect}>
        <option value="">Filter by category</option>
        <option value="salad">Salads</option>
        <option value="pasta">Pasta</option>
        <option value="meat">Meat</option>
        <option value="dessert">Dessert</option>
      </select>
      <button className="filter-sort-button mb-2" onClick={() => handleSortChange('name')}>
        <AiOutlineSortAscending style={{ marginRight: '0.5rem', fontSize: '3.2rem', verticalAlign: 'middle' }} />
        Sort by name
      </button>
      <button className="filter-sort-button mb-2" onClick={() => handleSortChange('recent')}>
        <AiOutlineSortDescending style={{ marginRight: '0.5rem', fontSize: '3.2rem', verticalAlign: 'middle' }} />
        Sort by date added
      </button>
    </div>
  );
};

export default FilterSort;




