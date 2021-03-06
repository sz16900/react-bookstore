import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const StyledTable = styled.div``;

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
      .filter(book => filter === 'All' || book.category === filter)
      .map(book => (
        <Book
          book={book}
          key={book.id}
          onClick={() => this.handleRemoveBook(book.id)}
        />
      ));
    return <StyledTable>{booksArr}</StyledTable>;
  }
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: id => dispatch(removeBook(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
