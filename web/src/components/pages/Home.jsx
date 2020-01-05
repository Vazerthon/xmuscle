import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import LOGIN from '../../graphql/queries/login';


export default function Home() {
  const { loading, error, data } = useQuery(LOGIN);

  return (
    <div>
      { loading && 'loading...' }
      { error && `error: ${error}`}
      {data && data.login.id}
    </div>
  );
}
