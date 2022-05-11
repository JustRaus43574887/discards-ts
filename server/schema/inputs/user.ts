import {
  GraphQLInputFieldConfigMap,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";

const user: GraphQLInputFieldConfigMap = {
  name: {
    type: GraphQLString,
  },
  email: {
    type: GraphQLNonNull(GraphQLString),
  },
  password: {
    type: GraphQLNonNull(GraphQLString),
  },
};

export default user;
