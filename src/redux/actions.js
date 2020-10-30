import { normalize } from "normalizr";
import * as schema from "./schema/postSchema";
// export const addCount = () => ({ type: "INCREMENT_COUNT" })

//async version
// const startAddCount = () => {
//   return (dispatch, getState) => {
//     // call dispatch to do some async action, get an index, create an obj, update, delete, (talk to the api)
//   };
// };

//get index
export const startSetPosts = () => {
  return (dispatch, getState) => {
    fetch("http://localhost:3001/posts")
      .then((resp) => resp.json())
      // use normalizr for orm stuff
      // .then((data) => dispatch(setPosts(data.posts)));
      .then((data) => {
        const normalizedData = normalize(data, [schema.post]);
        // console.log("normal", normalize(data, schema.arrayOfPosts));
        //console.log("normal??", normalize(data, [schema.post]));
        dispatch(setPosts(normalizedData));
      });
  };
};

export const setPosts = (posts) => {
  return {
    type: "SET_POSTS",
    posts,
  };
};

//posted this

//add post

export const startAddPost = (postData = {}) => {
  return (dispatch, getState) => {
    const { title } = postData;

    const post = {
      title,
    };

    fetch("http://localhost:3001/posts", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(post),
    })
      .then((resp) => resp.json())
      .then((data) => dispatch(addPost(data.post)));
  };
};

export const addPost = (post) => {
  console.log("ADD A POST?");
  return {
    type: "ADD_POST",
    post,
  };
};
