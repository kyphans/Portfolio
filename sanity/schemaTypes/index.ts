import { blogSchema } from "./blogSchema";
import { projectSchema } from "./projectSchema";

export const schemaTypes = [projectSchema, blogSchema];
export const schema = {
  types: schemaTypes,
}