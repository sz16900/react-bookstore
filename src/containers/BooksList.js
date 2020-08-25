import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

class BooksList extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
  }

  handleRemoveBook(id) {
    const { removeBook } = this.props;
    removeBook(id);
  }

  render() {
    const { books } = this.props;
    const { filter } = this.props;
    const booksArr = books
      .filter((book) => filter === 'All' || book.category === filter)
      .map((book) => (
        <Book
          book={book}
          key={book.id}
          onClick={() => this.handleRemoveBook(book.id)}
        />
      ));
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Title</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>{booksArr}</tbody>
        </table>
      </>
    );
  }
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (id) => dispatch(removeBook(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
