import { useState } from 'react';

export default function useTest() {
  const [state] = useState('bla');

  return [state];
}
