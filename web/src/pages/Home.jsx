import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import TEST from '../graphql/queries/test';
import Paragraph from '../components/primitives/typography/Paragraph';

export default function Home() {
  const { data } = useQuery(TEST);

  return (
    <div>
      <Paragraph>{data && data.test.message}</Paragraph>
    </div>
  );
}
