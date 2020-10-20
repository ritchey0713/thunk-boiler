import { createStore } from "redux";

const initialState = {
  count: 10,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return {
        count: (state.count += 1),
      };
    default:
      return state;
  }
};

export default createStore(rootReducer);
