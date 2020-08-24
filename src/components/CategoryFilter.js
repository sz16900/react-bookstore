import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = () => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  return (
    <div className="filter-container">
      <p>Filter by category: </p>
      <select className="select" name="category">
        <option value="All" className="option">
          All
        </option>
        {categories.map((category) => (
          <option key={category} value={category} className="option">
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};



export default CategoryFilter;
