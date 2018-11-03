/**
 *
 * DrinkService
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import background from '../MainScreen/images/background.png';
import apple from './images/Applejuice.png';
import coffee from './images/Coffee.png';
import coldwater from './images/Coldwater.png';
import hotwater from './images/Hotwater.png';
import housewine from './images/housewine.png';
import orange from './images/Orangejuice.png';
import tea from './images/tea.png';
import warmwater from './images/Warmwater.png';
import whitewine from './images/whitewine.png';
import DrinkList from '../DrinkList';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const images = [
  {
    name: 'Hot Water',
    image: hotwater,
  },
  {
    name: 'Cold Water',
    image: coldwater,
  },
  {
    name: 'Warm Water',
    image: warmwater,
  },
  {
    name: 'Orange',
    image: orange,
  },
  {
    name: 'Apple',
    image: apple,
  },
  {
    name: 'Coffee',
    image: coffee,
  },
  {
    name: 'Tea',
    image: tea,
  },
  {
    name: 'House Wine',
    image: housewine,
  },
  {
    name: 'White Wine',
    image: whitewine,
  },
];
/* eslint-disable react/prefer-stateless-function */
export default class DrinkService extends React.PureComponent {
  render() {
    return (
      <Wrapper
        style={{
          background: `url(${background})`,
          backgroundSize: 'cover',
          overflow: 'hidden',
        }}
      >
        <DrinkList items={images} />
      </Wrapper>
    );
  }
}

DrinkService.propTypes = {};
