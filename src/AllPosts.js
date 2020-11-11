import React from "react";

import { Link } from "react-router-dom";

const AllPosts = ({ posts, refIds, match }) => {
  return (
    <div>
      {Object.values(posts).map((post) => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
          <br />
        </div>
      ))}
    </div>
  );
};

export default AllPosts;

// {refIds.map((id) => {
//   return (
//     <div key={id}>
//       <Link to={`/posts/${id}`}>{posts[id].title}</Link>
//       <br />
//     </div>
//   );
// })}
