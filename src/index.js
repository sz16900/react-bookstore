import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import App from './components/App';
import './App.css';

const initialState = {
  books: [
    { id: 1, title: 'Shabbham is cool1', category: 'Action' },
    { id: 2, title: 'Shabbham is cool2', category: 'Biography' },
    { id: 3, title: 'Shabbham is cool3', category: 'History' },
  ],
};
const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
