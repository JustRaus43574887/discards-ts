import { GraphQLFieldConfig } from "graphql";
import { IApolloContext } from "../../utils/apolloServerConfig";

import UserType from "../types/user";

const me: GraphQLFieldConfig<any, IApolloContext> = {
  description: "Current user.",
  type: UserType,
  resolve: (_, __, { user }) => user,
};

export default me;
