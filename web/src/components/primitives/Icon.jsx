import React from 'react';
import PropTypes from 'prop-types';

import LogoGoogle from 'react-ionicons/lib/LogoGoogle';
import MdAlert from 'react-ionicons/lib/MdAlert';
import MdClose from 'react-ionicons/lib/MdClose';
import MdMenu from 'react-ionicons/lib/MdMenu';

import { useTheme, styled } from '../../styling';

const icons = {
  google: LogoGoogle,
  alert: MdAlert,
  close: MdClose,
  menu: MdMenu,
};

const sizes = {
  sm: 2,
  md: 4,
  lg: 8,
};

export default function Icon({ icon, size, colour }) {
  const theme = useTheme();

  const colours = {
    primary: theme.colour.primary,
    highlight: theme.colour.highlight,
    error: theme.colour.alert.error,
  };

  const Component = styled(icons[icon])`
    margin: 0 ${theme.spacing.units(1)};
  `;

  return <Component fontSize={theme.spacing.units(sizes[size])} color={colours[colour]} />;
}

export const iconType = PropTypes.oneOf(Object.keys(icons));

Icon.propTypes = {
  icon: iconType.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  colour: PropTypes.oneOf(['primary', 'highlight', 'error']),
};

Icon.defaultProps = {
  size: 'md',
  colour: 'primary',
};
