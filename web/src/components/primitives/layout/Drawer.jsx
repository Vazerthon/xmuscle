import React from 'react';
import PropTypes from 'prop-types';

import { styled } from '../../../styling';

import RowReverse from './RowReverse';
import IconButton from '../form/IconButton';

const Slider = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  right: 0;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colour.primary};
  padding: ${({ theme }) => theme.spacing.units(4)};

  transform: translateX(100%);
  ${({ open }) => open && 'transform: translateX(0)'};
  transition: transform 150ms ease-out;
`;

export default function Drawer({ open, children, onCloseClick }) {
  return (
    <Slider open={open}>
      <RowReverse>
        <IconButton icon="close" onClick={onCloseClick} />
      </RowReverse>
      {children}
    </Slider>
  );
}

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onCloseClick: PropTypes.func.isRequired,
};
