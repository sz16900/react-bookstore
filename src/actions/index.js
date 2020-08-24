const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';

const addBook = (book) => ({
  type: CREATE_BOOK,
  book,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const changeFilter = (option = 'All') => ({
  type: CHANGE_FILTER,
  option,
});

export { addBook, removeBook, changeFilter };
