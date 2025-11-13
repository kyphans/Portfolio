import { authorSchema } from "./authorSchema";
import { blogSchema } from "./blogSchema";
import { projectSchema } from "./projectSchema";

export const schemaTypes = [authorSchema, blogSchema, projectSchema];
export const schema = {
  types: schemaTypes,
}