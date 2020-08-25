import React from 'react';
import '../style/App.css';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import NavBar from '../components/Navbar';
import styled from 'styled-components';

const AppStyled = styled.div`
  width: 1400px;
  height: 1097px;
  border-radius: 4px;
  box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.05);
  background-color: white;
`;

function App() {
  return (
    <AppStyled>
      <NavBar />
      <BooksList />
      <BooksForm />
    </AppStyled>
  );
}

export default App;
