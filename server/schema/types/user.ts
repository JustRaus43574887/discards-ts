import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

const user = new GraphQLObjectType({
  name: "User",
  description: "User type instance.",
  fields: {
    id: { type: GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLNonNull(GraphQLString) },
    surname: { type: GraphQLString },
    phone: { description: "Phone number.", type: GraphQLString },
  },
});

export default user;
