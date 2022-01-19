const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      if (state <= 0) {
        return state;
      } else {
        return state - 1;
      }
    default:
      return state;
  }
};

export default counter;
