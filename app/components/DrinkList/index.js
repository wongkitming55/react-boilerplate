/**
 *
 * DrinkList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
`;

const DrinkItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 640px;
  padding: 15px;
  &: img {
    width: 500px;
    height: 450px;
  }
  &: hover {
    cursor: pointer;
  }
`;

const DrinkLabel = styled.div`
  background: ${props => (props.hover ? '#c6c2c1' : '#4c4c4c')};
  color: ${props => (props.hover ? 'black' : 'white')};
  font-size: 2.1333rem;
  text-align: center;
`;

/* eslint-disable react/prefer-stateless-function */
class DrinkList extends React.PureComponent {
  state = {
    hoverItem: null,
  };

  handleMouseEnter = key => {
    this.setState({
      hoverItem: key,
    });
  };

  handleMouseLeave = () => {
    this.setState({
      hoverItem: null,
    });
  };

  handleItemClick = drink => {
    this.props.selectDrink(drink);
  };

  renderItems = () =>
    this.props.items.map(item => (
      <DrinkItem
        key={item.name}
        onMouseEnter={() => this.handleMouseEnter(item.name)}
        onMouseLeave={this.handleMouseLeave}
        onClick={() => {
          if (item.name === 'House Wine') {
            this.handleItemClick(item.name);
          }
        }}
      >
        <img src={item.image} />
        <DrinkLabel hover={this.state.hoverItem === item.name}>
          {item.name}
        </DrinkLabel>
      </DrinkItem>
    ));

  render() {
    return <Wrapper>{this.renderItems()}</Wrapper>;
  }
}

DrinkList.propTypes = {
  items: PropTypes.array,
  selectDrink: PropTypes.func,
};

export default DrinkList;
