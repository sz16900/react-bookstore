import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, onClick }) => (
  <tr>
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td><button type="button" onClick={onClick}>Delete</button></td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Book;
