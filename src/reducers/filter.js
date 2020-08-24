const filterReducer = (state = 'All', action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.option;
    default:
      return state;
  }
};

export default filterReducer;
