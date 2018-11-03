import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const Wrapper = styled.div`
  height 50px;
  width: 100%;
  background: #e6e6dc;
`;

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return <Wrapper />;
  }
}

export default Header;
