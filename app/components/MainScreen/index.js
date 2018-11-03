/**
 *
 * MainScreen
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import Slider from 'react-slick';
// import '~slick-carousel/slick/slick.css';
// import '~slick-carousel/slick/slick-theme.css';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import blanket from './images/blanket.png';
import call from './images/call.png';
import drinks from './images/drinks.png';
import food from './images/food.png';
import form from './images/form.png';
import medical from './images/medical.png';
import shopping from './images/shopping.png';
import background from './images/background.png';

const Wrapper = styled.div`
  height: 100%;
  &: div {
    background: red;
  }
  &. slick-track {
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  width: 350px;
  height: 500px;
  justify-content: center;
  align-items: center;
`;

const imageArr = [
  {
    name: 'blanket',
    image: blanket,
  },
  {
    name: 'call',
    image: call,
  },
  {
    name: 'drinks',
    image: drinks,
  },
  {
    name: 'food',
    image: food,
  },
  {
    name: 'form',
    image: form,
  },
  {
    name: 'medical',
    image: medical,
  },
  {
    name: 'shopping',
    image: shopping,
  },
];

/* eslint-disable react/prefer-stateless-function */
export default class MainScreen extends React.PureComponent {
  componentDidMount() {
    const elements = ReactDOM.findDOMNode(this).children[0];
    elements.style.background = background;
  }

  onItemClick = () => {
    this.props.selectService();
  };

  renderItems = () =>
    imageArr.map((item, i) => (
      <ImageWrapper onClick={this.onItemClick(item.name)}>
        <img src={item.image} key={`img_${item.name}`} />
      </ImageWrapper>
    ));

  render() {
    const settings = {
      dots: false,
      infinite: true,
      focusOnSelect: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      centerMode: true,
      speed: 500,
    };
    return (
      <Wrapper>
        <Slider style={{ background, height: '100%' }} {...settings}>
          {this.renderItems()}
        </Slider>
      </Wrapper>
    );
  }
}

MainScreen.propTypes = {
  items: PropTypes.array,
  selectService: PropTypes.func,
};

// export default MainScreen;
