import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];
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

  <form>
    <h2>Title:</h2>
    <input name="title" type="text" value={title} onChange={handleChange} />
    <h2>Category:</h2>
    <select name="category" value={category} onChange={handleChange}>
      {categories.map((category) => (
        <option key={category}>{category}</option>
      ))}
    </select>
  </form>;
};

const mapDispatchToProps = (state) => ({
  book: () => {
    dispatch(createBook(book));
  },
});

BookForm.propTypes = {
  book: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BookForm);

// export default BookForm;
