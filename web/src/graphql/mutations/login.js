import { gql } from 'apollo-boost';

export default gql`
  mutation login($code: String!) {
    login(code: $code) {
      accessToken
    }
  }
`;
