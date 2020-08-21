import React from 'react';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];
const BookForm = () => (
  <form>
    <h2>Title:</h2>
    <input name="title" type="text" />
    <h2>Category:</h2>
    <select name="category">
      {categories.map(category => (
        <option key={category}>{category}</option>
      ))}
    </select>
  </form>
);
export default BookForm;
