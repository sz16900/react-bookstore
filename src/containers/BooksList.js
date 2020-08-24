import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

class BooksList extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    console.log(props);
  }

  handleRemoveBook(id) {
    const { removeBook } = this.props;
    removeBook(id);
  }

  handleFilterChange(event) {
    event.preventDefault();
  }

  render() {
    const { books } = this.props;
    const booksArr = books.map((book) => (
      <Book
        book={book}
        key={book.id}
        onClick={() => this.handleRemoveBook(book.id)}
      />
    ));
    return (
      <>
        <CategoryFilter handleFilterChange={this.handleFilterChange} />
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
  filter: PropTypes.string,
  filterCategory: PropTypes.func.isRequired,
};

BooksList.defaultProps = {
  filter: 'All',
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (id) => dispatch(removeBook(id)),
  filterCategory: (option) => dispatch(changeFilter(option)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
