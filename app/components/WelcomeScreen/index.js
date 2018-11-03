/**
 *
 * WelcomeScreen
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { fadeIn, duration } from '../../animations';

import messages from './messages';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  animation: ${fadeIn} ${duration * 2}s;
`;

/* eslint-disable react/prefer-stateless-function */
class WelcomeScreen extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <TextWrapper>
          <FormattedMessage className="fade" {...messages.header} />
        </TextWrapper>
      </Wrapper>
    );
  }
}

WelcomeScreen.propTypes = {};

export default WelcomeScreen;
