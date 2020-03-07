import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styled, media } from '../../../styling';

import Drawer from './Drawer';
import TabletOrLess from './TabletOrLess';
import MoreThanTablet from './MoreThanTablet';
import RowReverse from './RowReverse';
import IconButton from '../form/IconButton';
import Heading from '../typography/Heading';

const Grid = styled.div`
  display: -ms-grid;
  display: grid;
  grid-template-columns: 100fr;

  ${media('>tablet')} {
    grid-template-columns: 26vw 100fr;
  }
`;

const Aside = styled.div`
  grid-column: 1;
`;

const Main = styled.div`
  ${media('>tablet')} {
    grid-column: 2;
  }
`;

export default function TwoColumn({ children: [aside, main], heading }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <MoreThanTablet>
        { heading && <Heading>{heading}</Heading>}
      </MoreThanTablet>
      <TabletOrLess>
        <RowReverse>
          <IconButton icon="menu" onClick={openDrawer} />
          { heading && <Heading>{heading}</Heading>}
        </RowReverse>
        <Drawer open={drawerOpen} onCloseClick={closeDrawer}>
          {aside}
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
  heading: PropTypes.string,
};

TwoColumn.defaultProps = {
  heading: undefined,
};
