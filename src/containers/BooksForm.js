import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook } from '../actions/index';


const categories = [
  { id: 1, category: 'Action' },
  { id: 2, category: 'Biography' },
  { id: 3, category: 'History' },
  { id: 4, category: 'Horror' },
  { id: 5, category: 'Kids' },
  { id: 6, category: 'Learning' },
  { id: 7, category: 'Sci-Fi' }];

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.books.length + 1,
      title: '',
      category: categories[0].category,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name } = event.target;
    this.setState({ [name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { addBook } = this.props;
    addBook(this.state);
    this.setState(state => ({
      id: state.id + 1,
      title: '',
      category: categories[0].category,
    }));
  }

  render() {
    const { title, category } = this.state;
    const options = categories.map(element => <option key={element.id}>{element.category}</option>);
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="title" value={title} placeholder="title" onChange={this.handleChange} required />
        <select name="category" value={category} onChange={this.handleChange}>
          {options}
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

BooksForm.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  addBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  addBook: book => dispatch(addBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);