// import { Schema, arrayOf } from "normalizr";

// export const post = new Schema("posts");
// export const arrayOfPosts = arrayOf(post);

import { normalize, schema } from "normalizr";

export const tag = new schema.Entity("tags");

export const post = new schema.Entity("posts", {
  tags: [tag],
});
