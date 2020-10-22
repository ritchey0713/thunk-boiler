import { normalize, arrayOf } from "normalizr";
// export const addCount = () => ({ type: "INCREMENT_COUNT" })

//async version
// const startAddCount = () => {
//   return (dispatch, getState) => {
//     // call dispatch to do some async action, get an index, create an obj, update, delete, (talk to the api)
//   };
// };

import postSchema from "./schema/postSchema";

//get index
export const startSetPosts = () => {
  return (dispatch, getState) => {
    fetch("http://localhost:3001/posts")
      .then((resp) => resp.json())
      // use normalizr for orm stuff
      // .then((data) => dispatch(setPosts(data.posts)));
      .then((data) => {
        const normal = normalize(data.posts, postSchema);
        console.log(normal);
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
