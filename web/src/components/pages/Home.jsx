import React from 'react';
// import { useQuery } from '@apollo/react-hooks';

// import LOGIN from '../../graphql/queries/login';
import useTest from './useTest';

export default function Home() {
  // const { loading, error, data } = useQuery(LOGIN);
  const [x] = useTest();
  return (
    <div>
      {x}
    </div>
  );
}
