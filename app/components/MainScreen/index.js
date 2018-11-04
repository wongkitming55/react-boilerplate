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
import { duration, fadeIn } from '../../animations';

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  background-image: ${`url(${background})`};
  background-size: cover;
  overflow: hidden;
  &: div {
    background: red;
  }
  . slick-track {
    width: 70px;
    justify-content: center;
    align-items: center;
  }

  .slick-slide {
    outline: none;
    height: 100vh;
    text-align: center;
    color: white;
    font-size: 20px;
    display: table !important;
  }

  .slick-slide div {
    outline: none;
    display: table-cell;
    vertical-align: middle;
  }

  .slick-slide.c {
    display: inline-block;
    vertical-align: middle;
    float: none;
  }
  animation: ${fadeIn} ${duration * 2}s;
`;

const ImageWrapper = styled.div`
  text-align: center;
  width: 350px;
  height: 350px;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    transition: all 0.5s;
    transform: scale(1.05, 1.05);
    width: 50%;
    margin: 0 auto;
    width: ${props => (props.selected ? '250px' : '133px')};
    height: ${props => (props.selected ? '250px' : '143px')};
  }
  span {
    padding-top: 10px;
    font-size: 40px;
    visibility: ${props => (props.selected ? 'visible' : 'hidden')};
  }
`;

const imageArr = [
  {
    name: 'Blanket',
    image: blanket,
  },
  {
    name: 'Call Cabin Crew',
    image: call,
  },
  {
    name: 'Drinks',
    image: drinks,
  },
  {
    name: 'Food',
    image: food,
  },
  {
    name: 'Forms',
    image: form,
  },
  {
    name: 'Medical Help',
    image: medical,
  },
  {
    name: 'Shopping',
    image: shopping,
  },
];

/* eslint-disable react/prefer-stateless-function */
export default class MainScreen extends React.PureComponent {
  onItemClick = service => {
    this.props.selectService(service);
  };

  renderItems = () =>
    imageArr.map((item, i) => (
      <ImageWrapper
        key={`img_${item.name}`}
        onClick={() => {
          if (this.state.activeSlide2 === i) {
            this.onItemClick(item.name);
          }
        }}
        selected={this.state.activeSlide2 === i}
      >
        <img src={item.image} key={`img_${item.name}`} />
        <span>{item.name}</span>
      </ImageWrapper>
    ));

  state = {
    activeSlide2: 0,
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      focusOnSelect: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      speed: 200,
      afterChange: current => this.setState({ activeSlide2: current }),
    };
    return (
      <Wrapper>
        <Slider {...settings}>{this.renderItems()}</Slider>
      </Wrapper>
    );
  }
}

MainScreen.propTypes = {
  items: PropTypes.array,
  selectService: PropTypes.func,
};

// export default MainScreen;
