import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import removeBook from '../actions/index';

const BookList = ({ books, removeBook }) => {
  const handleRemoveBook = (book) => {
    removeBook(book);
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <Book book={book} key={book.id} handleRemoveBook={handleRemoveBook} />
        ))}
      </tbody>
    </table>
  );
};

BookList.defaultProps = {
  book: {},
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ books: state.books });

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => {
    dispatch(removeBook(book));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
