import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import TEST from '../graphql/queries/test';
import Paragraph from '../components/primitives/typography/Paragraph';
import Title from '../components/primitives/typography/Title';
import TwoColumn from '../components/primitives/layout/TwoColumn';

export default function Home() {
  const { data } = useQuery(TEST);

  return (
    <TwoColumn heading="Welcome to X Muscle">
      <>
        <ul>
          <li>
            bla
          </li>
          <li>
            foo
          </li>
        </ul>
      </>
      <>
        <Title>Workouts</Title>
        <Paragraph>{data && data.test.message}</Paragraph>
      </>
    </TwoColumn>
  );
}
