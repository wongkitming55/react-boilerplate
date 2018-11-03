import { keyframes } from 'styled-components';
import fadeInDown from 'react-animations/lib/fade-in-down';
import fadeInUp from 'react-animations/lib/fade-in-up';
import fadeInLeft from 'react-animations/lib/fade-in-left';
import fadeInRight from 'react-animations/lib/fade-in-right';
import fadeIn from 'react-animations/lib/fade-in';
import fadeOut from 'react-animations/lib/fade-out';

export const duration = 1;

const fadeInA = keyframes`${fadeIn}`;
const fadeOutA = keyframes`${fadeOut}`;
const fadeInDownA = keyframes`${fadeInDown}`;
const fadeInUpA = keyframes`${fadeInUp}`;
const fadeInLeftA = keyframes`${fadeInLeft}`;
const fadeInRightA = keyframes`${fadeInRight}`;

export {
  fadeInA as fadeIn,
  fadeOutA as fadeOut,
  fadeInDownA as fadeInDown,
  fadeInUpA as fadeInUp,
  fadeInLeftA as fadeInLeft,
  fadeInRightA as fadeInRight,
};
