import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import CategoryFilter from './CategoryFilter';
import { changeFilter } from '../actions';
import styled from 'styled-components';

const StyledNav = styled.div`
  padding: 1rem 3rem;
  background-color: white !important;
`;

const StyledBrand = styled.a`
  color: #0290ff !important;
  font-weight: bold;
  font-size: 26px;
`;

const StyledLink = styled.a`
  font-weight: bold;
  font-size: 12px;
  letter-spacing: 2px;
  color: #121212;
`;

const NavBar = ({ filterCategory }) => {
  const handleFilterChange = (event) => {
    event.preventDefault();
    filterCategory(event.target.value);
  };
  return (
    <StyledNav>
      <StyledBrand>Bookstore CMS</StyledBrand>
      <StyledLink>BOOKS</StyledLink>
      <CategoryFilter handleFilterChange={handleFilterChange} />
    </StyledNav>
  );
};

NavBar.propTypes = {
  filterCategory: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  filterCategory: (option) => dispatch(changeFilter(option)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
