import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
const initialState = {
  posts: {},
  refIds: [],
  tags: {},
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
        posts: {
          ...state.posts,
          [action.post.id]: action.post,
        },
        refIds: state.refIds.concat(action.post.id),
      };
    case "SET_TAGS":
      return {
        ...state,
        tags: action.tags.entities.tags,
      };

    default:
      return state;
  }
};

export default createStore(rootReducer, applyMiddleware(thunk, logger));
