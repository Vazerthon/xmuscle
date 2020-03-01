import React from 'react';
import PropTypes from 'prop-types';

import LogoGoogle from 'react-ionicons/lib/LogoGoogle';
import MdAlert from 'react-ionicons/lib/MdAlert';

import { useTheme, styled } from '../../styling';

const icons = {
  google: LogoGoogle,
  alert: MdAlert,
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

Icon.propTypes = {
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  colour: PropTypes.oneOf(['primary', 'highlight', 'error']),
};

Icon.defaultProps = {
  size: 'md',
  colour: 'primary',
};
