import React from 'react';
// import {connect} from 'react-redux';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const BookForm = () =>
// const [title,setTitle]=useState('');

  (
    <form>
      <h2>Title:</h2>
      <input name="title" type="text" />
      <h2>Category:</h2>
      <select name="category">
        {categories.map(category => (<option key={category}>{category}</option>))}
      </select>
    </form>

  );
export default BookForm;
