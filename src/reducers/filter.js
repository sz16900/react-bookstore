const CHANGE_FILTER = 'CHANGE_FILTER';

const filterReducer = (state = 'All', action) => {
  switch (action) {
    case CHANGE_FILTER:
      return action.option;
    default:
      return state;
  }
};

export default filterReducer;
