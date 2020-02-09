import { gql } from 'apollo-boost';

export default gql`
  mutation register($code: String!) {
    register(code: $code) {
      accessToken
      id
    }
  }
`;
