import React from 'react';
import PropTypes from 'prop-types';
import { styled, media } from '../../../styling';

const Grid = styled.div`
  display: -ms-grid;
  display: grid;

  ${media('>tablet')} {
    grid-template-columns: 20vw 100fr;
  }

  ${media('<=tablet')} {
    grid-template-rows: 20vh 100fr;
  }
`;

const Aside = styled.div`
  ${media('>tablet')} {
    grid-column: 1;
  }
  ${media('<=tablet')} {
    grid-row: 1;
  }
`;

const Main = styled.div`
  ${media('>tablet')} {
    grid-column: 2;
  }
  ${media('<=tablet')} {
    grid-row: 2;
  }
`;

export default function TwoColumn({ children: [aside, main] }) {
  return (
    <Grid>
      <Aside>{aside}</Aside>
      <Main>{main}</Main>
    </Grid>
  );
}

TwoColumn.propTypes = {
  children: PropTypes.node.isRequired,
};
