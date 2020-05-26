import { gql } from 'apollo-boost';

export default gql`
  query workouts {
    workouts {
      id
    }
  }
`;
