import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import WORKOUTS from '../graphql/queries/workouts';

import Paragraph from '../components/primitives/typography/Paragraph';
import Title from '../components/primitives/typography/Title';
import TwoColumn from '../components/primitives/layout/TwoColumn';

export default function Home() {
  const { data } = useQuery(WORKOUTS);

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
        <Paragraph>{data && data.workouts.length}</Paragraph>
      </>
    </TwoColumn>
  );
}
