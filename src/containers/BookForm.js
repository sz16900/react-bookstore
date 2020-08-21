import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import createBook from '../actions/index';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];
let idGen=3;

const BookForm = (props) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');

  const handleChange = (event) => {
    if (event.target.name === 'title') {
      setTitle(event.target.value);
    } else {
      setCategory(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const book={id: idGen += 1, title, category};
    props.submitNewBook(book);
    event.target.reset();
  };
return(
  <form onSubmit={handleSubmit}>
    <h2>Title:</h2>
    <input name="title" type="text" value={title} onChange={handleChange} />
    <h2>Category:</h2>
    <select name="category" value={category} onChange={handleChange}>
      {categories.map((category) => (
        <option key={category}>{category}</option>
      ))}
    </select>
    <button type="submit">Submit</button>
  </form>
);
};

const mapDispatchToProps = (dispatch) => ({
  submitNewBook: book => {
    dispatch(createBook(book));
  },
});

BookForm.propTypes = {
  submitNewBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BookForm);

// export default BookForm;
