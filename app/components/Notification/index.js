/**
 *
 * Notification
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { duration, fadeInRight } from '../../animations';

const Wrapper = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 350px;
  height: 40px;
  background: #006465;
  color: white;
  font-size: 20px;
  animation: ${fadeInRight} ${duration}s;
  display: ${props => (props.active ? 'inline-flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

/* eslint-disable react/prefer-stateless-function */
class Notification extends React.PureComponent {
  render() {
    return (
      <Wrapper active={this.props.active}>
        <FormattedMessage {...messages.header} />
      </Wrapper>
    );
  }
}

Notification.propTypes = {
  active: PropTypes.bool,
};

export default Notification;
