import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import TEST from '../graphql/queries/test';
import Paragraph from '../components/primitives/typography/Paragraph';
import Heading from '../components/primitives/typography/Heading';
import Title from '../components/primitives/typography/Title';
import TwoColumn from '../components/primitives/layout/TwoColumn';

export default function Home() {
  const { data } = useQuery(TEST);

  return (
    <TwoColumn>
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
        <Heading>Welcome to X Muscle</Heading>
        <Title>Workouts</Title>
        <Paragraph>{data && data.test.message}</Paragraph>
      </>
    </TwoColumn>
  );
}
