import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import Icon, { iconType } from '../Icon';

export default function IconButton({ icon, onClick }) {
  return (
    <Button round size="sm" onClick={onClick}>
      <Icon icon={icon} colour="highlight" />
    </Button>
  );
}

IconButton.propTypes = {
  icon: iconType.isRequired,
  onClick: PropTypes.func.isRequired,
};
