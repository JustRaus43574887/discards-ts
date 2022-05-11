import { DocumentNode, gql } from "@apollo/client";

const REG_MUTATION: DocumentNode = gql`
  mutation registration($name: String, $email: String!, $password: String!) {
    registration(name: $name, email: $email, password: $password)
  }
`;

export default REG_MUTATION;
