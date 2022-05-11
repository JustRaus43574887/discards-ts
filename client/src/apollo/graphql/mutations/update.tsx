import { DocumentNode, gql } from "@apollo/client";

const UPDATE_USER_MUTATION: DocumentNode = gql`
  mutation update(
    $name: String
    $surname: String
    $phone: String
    $email: String
    $password: String
  ) {
    update(
      name: $name
      surname: $surname
      phone: $phone
      email: $email
      password: $password
    ) {
      id
      name
      surname
      phone
    }
  }
`;

export default UPDATE_USER_MUTATION;
