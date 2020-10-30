import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
const initialState = {
  posts: {},
  refIds: [],
};

const rootReducer = (state = initialState, action) => {
  // console.log("STATE AND ACTION", state, action);
  switch (action.type) {
    case "SET_POSTS":
      return {
        ...state,
        posts: action.posts.entities.posts,
        refIds: action.posts.result,
      };
    case "ADD_POST":
      return {
        ...state,
        posts: state.posts.concat(action.post),
      };

    default:
      return state;
  }
};

export default createStore(rootReducer, applyMiddleware(thunk));
