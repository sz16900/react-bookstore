import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledRow = styled.div`
  width: 80%;
  margin: 1rem auto;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  font-family: 'Roboto Slab', serif;
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
`;

const StyledLeft = styled.div`
  width: 75%;
  padding-right: 5rem;
`;

const StyledTitle = styled.p`
  font-size: 22px;
  font-weight: bold;
  letter-spacing: -0.2px;
  color: #121212;
  font-family: 'Roboto Slab', serif;
  text-transform: capitalize;
  margin-bottom: 0;
`;

const StyledCategory = styled.p`
  opacity: 0.5;
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.9px;
  border: none;
`;

const StyledAuthor = styled.p`
  width: 107px;
  height: 19px;
  font-family: RobotoSlab;
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #4386bf;
  margin-top: 0;
`;

const StyledLink = styled.button`
  height: 19px;
  font-size: 14px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #4386bf;
  font-family: 'Roboto Slab', serif;
  border: none;
  background-color: transparent;
  padding-left: 0;
`;

const Book = ({ book, onClick }) => (
  <StyledRow>
    <StyledLeft>
      <StyledCategory>{book.category}</StyledCategory>
      <StyledTitle>{book.title}</StyledTitle>
      <StyledAuthor>Lorem Ipsum</StyledAuthor>
      <div>
        <StyledLink type="button">Comments</StyledLink>
        <StyledLink type="button" onClick={onClick}>
          Remove
        </StyledLink>
        <StyledLink type="button">Edit</StyledLink>
      </div>
    </StyledLeft>
  </StyledRow>
);

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Book;
