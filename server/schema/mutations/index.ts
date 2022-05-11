import { GraphQLObjectType } from "graphql";

import login from "../mutations/login";
import registration from "../mutations/registration";
import update from "../mutations/update";

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    login,
    registration,
    update,
  },
});

export default mutation;
