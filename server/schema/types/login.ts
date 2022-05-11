import { ApolloError } from "apollo-server-errors";
import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { IUserAttributes } from "../../models/User";

import UserType from "./user";

export type TLogin =
  | {
      token: string;
      user: IUserAttributes;
    }
  | ApolloError;

const login = new GraphQLObjectType({
  name: "Login",
  description: "User login type.",
  fields: {
    token: { type: GraphQLNonNull(GraphQLString) },
    user: { type: GraphQLNonNull(UserType) },
  },
});

export default login;
