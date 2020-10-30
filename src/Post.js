import React from "react";

const Post = ({ posts, ...otherProps }) => {
  const post = posts[otherProps.match.params.id];
  return (
    <div>
      <br />
      {post ? post.title : "SHOWPAGE"}
    </div>
  );
};

export default Post;
