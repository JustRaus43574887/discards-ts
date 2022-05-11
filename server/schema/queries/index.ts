import { GraphQLObjectType } from "graphql";

import me from "./me";

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    me,
  },
});

export default query;
