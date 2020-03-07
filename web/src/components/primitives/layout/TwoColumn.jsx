import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styled, media } from '../../../styling';

import Drawer from './Drawer';
import TabletOrLess from './TabletOrLess';
import MoreThanTablet from './MoreThanTablet';
import RowReverse from './RowReverse';
import IconButton from '../form/IconButton';

const Grid = styled.div`
  display: -ms-grid;
  display: grid;
  grid-template-columns: 100fr;

  ${media('>tablet')} {
    grid-template-columns: 20vw 100fr;
  }
`;

const Aside = styled.div`
  grid-column: 1;
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
  const [drawerOpen, setDrawerOpen] = useState(false);
  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <TabletOrLess>
        <RowReverse>
          <IconButton icon="menu" onClick={openDrawer} />
        </RowReverse>
        <Drawer open={drawerOpen} onCloseClick={closeDrawer}>
          <Aside>{aside}</Aside>
        </Drawer>
      </TabletOrLess>
      <Grid>
        <MoreThanTablet>
          <Aside>{aside}</Aside>
        </MoreThanTablet>
        <Main>{main}</Main>
      </Grid>
    </>
  );
}

TwoColumn.propTypes = {
  children: PropTypes.node.isRequired,
};
