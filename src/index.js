import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers/index';

const books = {
  books: [
    {
      id: 1,
      title: 'Justice League',
      category: 'Action',
    },
    {
      id: 2,
      title: 'Avator',
      category: 'Sci-Fi',
    },
    {
      id: 3,
      title: 'Frozen',
      category: 'Kids',
    },
  ],
};

const store = createStore(rootReducer, books);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);