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
    float:none;
}


`;

const ImageWrapper = styled.div` 
  text-align: center;
  width: 350px;
  height: 350px;
  justify-content: center;
  align-items: center; 
  img {
    transition: opacity 5s ease-in;
    width: 50%;
    margin: 0 auto;
    width: ${(props) => props.selected ? '250px' : 'transform: scale(1,1)'};
    height: ${(props) => props.selected ? '250px' : 'transform: scale(1,1)'};
  }
  span {
    font-size: 50px;	
    visibility: ${(props) => props.selected ? 'visible' : 'hidden'} ;
  }
`;

const imageArr = [blanket, call, drinks, food, form, medical, shopping];

/* eslint-disable react/prefer-stateless-function */
export default class MainScreen extends React.PureComponent {
  componentDidMount() {
    const elements = ReactDOM.findDOMNode(this).children[0];
    elements.style.background = background;
  }

  renderItems = () =>
    imageArr.map((item, i) => {
      console.log(this.state.activeSlide2, i)
      return (
      <ImageWrapper selected={this.state.activeSlide2 === i}>
        <img src={item} key={`img${i}`}  />
	<span>blanket</span>
      </ImageWrapper>
    )});


  state = {
    activeSlide: 0,
    activeSlide2: 0
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
      beforeChange: (current, next) => this.setState({ activeSlide: next }),
      afterChange: current => this.setState({ activeSlide2: current })
    };
    return (
     
      <Wrapper style={{ backgroundImage: 'url(' + require('./images/background.png') + ')', backgroundSize: 'cover',
            overflow: 'hidden'}}>
  
            <Slider {...settings}>
             {this.renderItems()}
           </Slider>
   
      </Wrapper>
    );
  }
}

MainScreen.propTypes = {
  items: PropTypes.array,
};

// export default MainScreen;
