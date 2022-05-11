import { gql, DocumentNode } from "@apollo/client";

const ME_QUERY: DocumentNode = gql`
  query me {
    me {
      id
      name
      phone
      surname
    }
  }
`;

export default ME_QUERY;
