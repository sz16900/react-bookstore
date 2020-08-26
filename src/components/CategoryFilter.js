import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin-left: 4em;
`;

const CategoryFilter = ({ handleFilterChange }) => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  return (
    <StyledDiv>
      <select className="select" name="category" onChange={handleFilterChange}>
        <option value="All" className="option">
          All
        </option>
        {categories.map(category => (
          <option key={category} value={category} className="option">
            {category}
          </option>
        ))}
      </select>
    </StyledDiv>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
