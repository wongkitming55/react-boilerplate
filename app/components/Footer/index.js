/**
 *
 * Footer
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MdKeyboardVoice } from 'react-icons/md';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  &: hover {
    color: grey;
  }
`;

/* eslint-disable react/prefer-stateless-function */
class Footer extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <MdKeyboardVoice size={40} />
      </Wrapper>
    );
  }
}

Footer.propTypes = {};

export default Footer;
