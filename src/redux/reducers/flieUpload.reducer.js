const uploadReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_UPLOAD":
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default uploadReducer;
