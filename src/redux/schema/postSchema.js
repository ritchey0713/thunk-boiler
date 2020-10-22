import { schema, arrayOf } from "normalizr";

const postSchema = new schema.Entity("posts", { idAttribute: "id" });
const tagSchema = new schema.Entity("tags", { idAttribute: "id" });

postSchema.define({
  tags: arrayOf(tagSchema),
});

export { postSchema, tagSchema };
