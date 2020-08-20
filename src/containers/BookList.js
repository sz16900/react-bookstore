import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BookList = ({ books }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <Book book={book} key={book.id} />
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({ books: state.books });

// BookList.defaultProps = {
//   books: [],
// };

BookList.propTypes = {
  books: PropTypes.objectOf(PropTypes.array),
};

export default connect(mapStateToProps)(BookList);
