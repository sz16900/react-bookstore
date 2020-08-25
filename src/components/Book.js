import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledRow = styled.div`
  width: 70%;
  margin: 1rem auto;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  font-family: 'Roboto Slab', serif;
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  // align-items: center;
`;

const StyledLeft = styled.div`
  width: 65%;
  padding-right: 5rem;
`;

const StyledRight = styled.div`
  width: 25%;
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

const StyledCurrent = styled.p`
  font-weight: 300;
  font-size: 13px;
  opacity: 0.5;
  text-transform: uppercase;
  margin-bottom: 0.3rem;
`;

const StyledChapter = styled.p`
  text-transform: capitalize;
  font-size: 16px;
  letter-spacing: -0.4px;
  font-weight: 300;
  margin-bottom: 1rem;
`;

const StyledUpdate = styled.button`
  background-color: #0290ff !important;
  padding: 0.25rem 1.35rem !important;
  font-size: 13px;
  text-transform: uppercase;
  border: none;
  color: white;
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
    <StyledRight>
      <StyledCurrent>CURRENT CHAPTER</StyledCurrent>
      <StyledChapter>Chapter Nth</StyledChapter>
      <StyledUpdate>UPDATE PROGRESS</StyledUpdate>
    </StyledRight>
  </StyledRow>
);

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Book;
