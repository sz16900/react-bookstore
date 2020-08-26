import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook } from '../actions/index';
import styled from 'styled-components';

const StyledLine = styled.p`
  width: 72%;
  margin: 3rem auto;
  background-color: #e8e8e8;
  height: 1px;
  border: solid 1px #e8e8e8;
`;

const StyledAdd = styled.p`
  height: 24px;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.18px;
  color: #888888;
  margin: 0 9.5em;
`;

const StyledForm = styled.form`
  width: 72%;
  margin: 1rem auto;
  font-family: 'Roboto Slab', serif;
  display: flex;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  width: 50%;
  height: 45px;
  border-radius: 4px;
  border: solid 1px #e8e8e8;
  background-color: #ffffff;
`;

const StyledCategory = styled.select`
  width: 25%;
  height: 45px;
  border-radius: 4px;
  border: solid 1px #e8e8e8;
  background-color: #ffffff;
`;

const StyledOption = styled.option`
  height: 19px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.15px;
  color: #c4c4c4;
`;

const StyledButton = styled.button`
  width: 15%;
  height: 45px;
  background-color: #0290ff !important;
  padding: 0.25rem 1.35rem !important;
  font-size: 13px;
  text-transform: uppercase;
  border: none;
  color: white;
`;

const categories = [
  { id: 1, category: 'Action' },
  { id: 2, category: 'Biography' },
  { id: 3, category: 'History' },
  { id: 4, category: 'Horror' },
  { id: 5, category: 'Kids' },
  { id: 6, category: 'Learning' },
  { id: 7, category: 'Sci-Fi' },
];

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

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({ ...prevState, [name]: value }));
  };

  handleSubmit(event) {
    event.preventDefault();
    const { addBook } = this.props;
    addBook(this.state);
    this.setState((state) => ({
      id: state.id + 1,
      title: '',
      category: categories[0].category,
    }));
    event.target.reset();
  }

  render() {
    const { title, category } = this.state;
    const options = categories.map((element) => (
      <option className="plahol" key={element.id}>
        {element.category}
      </option>
    ));
    return (
      <>
        <StyledLine />
        <StyledAdd>ADD NEW BOOK</StyledAdd>
        <StyledForm onSubmit={this.handleSubmit}>
          <StyledInput
            className="plahol"
            type="text"
            name="title"
            value={title}
            placeholder="Book Title"
            onChange={this.handleChange}
            required
          />
          <StyledCategory
            name="category"
            value={category}
            onChange={this.handleChange}
          >
            {options}
          </StyledCategory>
          <StyledButton type="submit">Submit</StyledButton>
        </StyledForm>
      </>
    );
  }
}

BooksForm.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  addBook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) => ({
  addBook: (book) => dispatch(addBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
