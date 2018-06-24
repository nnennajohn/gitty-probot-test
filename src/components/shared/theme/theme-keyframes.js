// @flow

import { keyframes } from 'styled-components';

export const loadingCircle = keyframes`
  0% {
    transform-origin: 50% 50%;
    transform: rotate(0deg);
  }
  100% {
    transform-origin: 50% 50%;
    transform: rotate(360deg);
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const fadeAndScaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(.98);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const pulsate = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

export const growAndFadeIn = (height: string) => keyframes`
  from {
    opacity: 0;
    height: 0;
  }

  to {
    opacity: 1;
    height: ${height};
  }
`;

export const shrinkAndFadeOut = (height: string) => keyframes`
  from {
    opacity: 0;
    height: ${height}
  }

  to {
    opacity: 1;
    height: 0;
  }
`;

export const moveUpIn = keyframes`
  0% {
    transform-origin: 0 0;
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform-origin: 0 0;
    transform: translateY(0%);
    opacity: 1;
  }
`;

export const moveUpOut = keyframes`
  0% {
    transform-origin: 0 0;
    transform: translateY(0%);
    opacity: 1;
  }
  100% {
    transform-origin: 0 0;
    transform: translateY(-100%);
    opacity: 0;
  }
`;

export const moveDownIn = keyframes`
  0% {
    transform-origin: 0 0;
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform-origin: 0 0;
    transform: translateY(0%);
    opacity: 1;
  }
`;

export const moveDownOut = keyframes`
  0% {
    transform-origin: 0 0;
    transform: translateY(0%);
    opacity: 1;
  }
  100% {
    transform-origin: 0 0;
    transform: translateY(100%);
    opacity: 0;
  }
`;

export const moveLeftIn = keyframes`
  0% {
    transform-origin: 0 0;
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform-origin: 0 0;
    transform: translateX(0%);
    opacity: 1;
  }
`;

export const moveLeftOut = keyframes`
  0% {
    transform-origin: 0 0;
    transform: translateX(0%);
    opacity: 1;
  }
  100% {
    transform-origin: 0 0;
    transform: translateX(-100%);
    opacity: 0;
  }
`;

export const moveRightIn = keyframes`
  0% {
    opacity: 0;
    transform-origin: 0 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform-origin: 0 0;
    transform: translateX(0%);
  }
`;

export const moveRightOut = keyframes`
  0% {
    transform-origin: 0 0;
    transform: translateX(0%);
    opacity: 1;
  }
  100% {
    transform-origin: 0 0;
    transform: translateX(100%);
    opacity: 0;
  }
`;

export const slideUpIn = keyframes`
  0% {
    opacity: 0;
    transform-origin: 0% 0%;
    transform: scaleY(.8);
  }
  100% {
    opacity: 1;
    transform-origin: 0% 0%;
    transform: scaleY(1);
  }
`;

export const slideUpOut = keyframes`
  0% {
    opacity: 1;
    transform-origin: 0% 0%;
    transform: scaleY(1);
  }
  100% {
    opacity: 0;
    transform-origin: 0% 0%;
    transform: scaleY(.8);
  }
`;

export const slideDownIn = keyframes`
  0% {
    opacity: 0;
    transform-origin: 100% 100%;
    transform: scaleY(.8);
  }
  100% {
    opacity: 1;
    transform-origin: 100% 100%;
    transform: scaleY(1);
  }
`;

export const slideDownOut = keyframes`
  0% {
    opacity: 1;
    transform-origin: 100% 100%;
    transform: scaleY(1);
  }
  100% {
    opacity: 0;
    transform-origin: 100% 100%;
    transform: scaleY(.8);
  }
`;

export const slideLeftIn = keyframes`
  0% {
    opacity: 0;
    transform-origin: 0% 0%;
    transform: scaleX(.8);
  }
  100% {
    opacity: 1;
    transform-origin: 0% 0%;
    transform: scaleX(1);
  }
`;

export const slideLeftOut = keyframes`
  0% {
    opacity: 1;
    transform-origin: 0% 0%;
    transform: scaleX(1);
  }
  100% {
    opacity: 0;
    transform-origin: 0% 0%;
    transform: scaleX(.8);
  }
`;

export const slideRightIn = keyframes`
  0% {
    opacity: 0;
    transform-origin: 100% 0%;
    transform: scaleX(.8);
  }
  100% {
    opacity: 1;
    transform-origin: 100% 0%;
    transform: scaleX(1);
  }
`;

export const slideRightOut = keyframes`
  0% {
    opacity: 1;
    transform-origin: 100% 0%;
    transform: scaleX(1);
  }
  100% {
    opacity: 0;
    transform-origin: 100% 0%;
    transform: scaleX(.8);
  }
`;

export const swingIn = keyframes`
  0%,
  100% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-10px);
  }
  40% {
    transform: translateX(10px);
  }
  60% {
    transform: translateX(-5px);
  }
  80% {
    transform: translateX(5px);
  }
`;

export const zoomIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const zoomOut = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.2);
  }
`;

export const zoomBigIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(.8);
  }
  100% {
    transform: scale(1);
  }
`;

export const zoomBigOut = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(.8);
  }
`;

export const zoomUpIn = keyframes`
  0% {
    opacity: 0;
    transform-origin: 50% 0%;
    transform: scale(.8);
  }
  100% {
    transform-origin: 50% 0%;
    transform: scale(1);
  }
`;

export const zoomUpOut = keyframes`
  0% {
    transform-origin: 50% 0%;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform-origin: 50% 0%;
    transform: scale(.8);
  }
`;

export const zoomDownIn = keyframes`
  0% {
    opacity: 0;
    transform-origin: 50% 100%;
    transform: scale(.8);
  }
  100% {
    transform-origin: 50% 100%;
    transform: scale(1);
  }
`;

export const zoomDownOut = keyframes`
  0% {
    transform-origin: 50% 100%;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform-origin: 50% 100%;
    transform: scale(.8);
  }
`;

export const zoomLeftIn = keyframes`
  0% {
    opacity: 0;
    transform-origin: 0% 50%;
    transform: scale(.8);
  }
  100% {
    transform-origin: 0% 50%;
    transform: scale(1);
  }
`;

export const zoomLeftOut = keyframes`
  0% {
    transform-origin: 0% 50%;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform-origin: 0% 50%;
    transform: scale(.8);
  }
`;

export const zoomRightIn = keyframes`
  0% {
    opacity: 0;
    transform-origin: 100% 50%;
    transform: scale(.8);
  }
  100% {
    transform-origin: 100% 50%;
    transform: scale(1);
  }
`;

export const zoomRightOut = keyframes`
  0% {
    transform-origin: 100% 50%;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform-origin: 100% 50%;
    transform: scale(.8);
  }
`;
