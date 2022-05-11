import { DocumentNode, gql } from "@apollo/client";

const LOGIN_MUTATION: DocumentNode = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
      }
    }
  }
`;

export default LOGIN_MUTATION;
