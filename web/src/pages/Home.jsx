import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import TEST from '../graphql/queries/test';

export default function Home() {
  const { data } = useQuery(TEST);

  return <div>{data && data.test.message}</div>;
}
