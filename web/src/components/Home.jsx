import React from 'react';
import { styled, media } from './styling';

const Container = styled.div`
  margin: ${({ theme }) => theme.spacing.units(4)};
  padding: ${({ theme }) => theme.spacing.units(2)};
  border: ${({ theme }) => `${theme.spacing.units(1)} solid ${theme.colour.primary}`};
  color: ${({ theme }) => theme.colour.secondary};

  ${media('<=tablet')} {
    border: ${({ theme }) => `${theme.spacing.units(1)} solid ${theme.colour.secondary}`};
    color: ${({ theme }) => theme.colour.primary};
  }
`;

export default function Home() {
  return (
    <Container>
      Hello, world
    </Container>
  );
}
