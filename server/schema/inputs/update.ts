import { GraphQLInputFieldConfigMap, GraphQLString } from "graphql";

const update: GraphQLInputFieldConfigMap = {
  name: {
    type: GraphQLString,
  },
  surname: {
    type: GraphQLString,
  },
  phone: {
    type: GraphQLString,
  },
  email: {
    type: GraphQLString,
  },
  password: {
    type: GraphQLString,
  },
};

export default update;
