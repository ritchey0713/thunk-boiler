import React from "react";

import { Link } from "react-router-dom";

const AllPosts = ({ posts, refIds, match }) => {
  return (
    <div>
      {refIds.map((id) => {
        return (
          <div key={id}>
            <Link to={`/posts/show/${id}`}>{posts[id].title}</Link>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default AllPosts;
