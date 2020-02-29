import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '../../../styling';
import Icon from '../../Icon';
import Row from '../layout/Row';

const ErrorText = styled.span`
  color: ${({ theme }) => theme.colour.alert.error};
`;

export default function Error({ children }) {
  return (
    <Row>
      <Icon icon="alert" colour="error" />
      <ErrorText>{children}</ErrorText>
    </Row>
  );
}

Error.propTypes = {
  children: PropTypes.node.isRequired,
};
