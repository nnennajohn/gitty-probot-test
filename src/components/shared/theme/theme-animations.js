// @flow
import { css } from 'styled-components';
import transitions from './theme-transitions';
import {
  fadeIn,
  fadeOut,
  moveUpIn,
  moveUpOut,
  moveDownIn,
  moveDownOut,
  moveLeftIn,
  moveLeftOut,
  moveRightIn,
  moveRightOut,
  slideUpIn,
  slideUpOut,
  slideDownIn,
  slideDownOut,
  slideLeftIn,
  slideLeftOut,
  slideRightIn,
  slideRightOut,
  swingIn,
  zoomIn,
  zoomOut,
  zoomBigIn,
  zoomBigOut,
  zoomUpIn,
  zoomUpOut,
  zoomDownIn,
  zoomDownOut,
  zoomLeftIn,
  zoomLeftOut,
  zoomRightIn,
  zoomRightOut,
} from './theme-keyframes';

const motionCommon = (duration = transitions.animationDurationBase) => css`
  animation-duration: ${duration};
  animation-fill-mode: both;
`;

const motionCommonLeave = (duration = transitions.animationDurationBase) => css`
  animation-duration: ${duration};
  animation-fill-mode: both;
`;

const makeMotion = (
  className,
  keyFrameName,
  duration = transitions.duration,
) => css`
  .${className}-enter, .${className}-appear {
    ${motionCommon(duration)} animation-play-state: paused;
  }
  .${className}-leave {
    ${motionCommonLeave(duration)} animation-play-state: paused;
  }
  .${className}-enter.${className}-enter-active,
    .${className}-appear.${className}-appear-active {
    animation-name: ${keyFrameName}In;
    animation-play-state: running;
  }
  .${className}-leave.${className}-leave-active {
    animation-name: ${keyFrameName}Out;
    animation-play-state: running;
    pointer-events: none;
  }
`;

// For common/openAnimation
export const motionCollapse = () => css`
  overflow: hidden;
  &-active {
    transition: height 0.15s @ease-in-out, opacity 0.15s @ease-in-out !important;
  }
`;

// Fade Motion

const fadeMotion = (className, keyFrameName) => css`
  ${makeMotion(className, keyFrameName)}
  .${className}-enter,
  .${className}-appear {
    opacity: 0;
    animation-timing-function: linear;
  }
  .${className}-leave {
    animation-timing-function: linear;
  }
`;

export const addFadeMotion = () => css`
  ${fadeMotion('fade', 'fade')}
  ${fadeIn()}
  ${fadeOut()}
`;

// Move Motion

const moveMotion = (className, keyFrameName) => css`
  ${makeMotion(className, keyFrameName)}
  .${className}-enter,
  .${className}-appear {
    opacity: 0;
    animation-timing-function: ${transitions.easeOutCirc};
  }
  .${className}-leave {
    animation-timing-function: ${transitions.easeInCirc};
  }
`;

export const addMoveMotion = () => css`
  ${moveMotion('move-up', 'moveUp')}
  ${moveMotion('move-down', 'moveDown')}
  ${moveMotion('move-left', 'moveLeft')}
  ${moveMotion('move-right', 'moveRight')}
  ${moveUpIn()}
  ${moveUpOut()}
  ${moveDownIn()}
  ${moveDownOut()}
  ${moveLeftIn()}
  ${moveLeftOut()}
  ${moveRightIn()}
  ${moveRightOut()}

`;

// Slide Motion

const slideMotion = (className, keyFrameName) => css`
  ${makeMotion(className, keyFrameName)}
  .${className}-enter,
  .${className}-appear {
    opacity: 0;
    animation-timing-function: ${transitions.easeOutQuint};
  }
  .${className}-leave {
    animation-timing-function: ${transitions.easeInQuint};
  }
`;

export const addSlideMotion = () => css`
  ${slideMotion('slide-up', 'slideUp')}
  ${slideMotion('slide-down', 'slideDown')}
  ${slideMotion('slide-left', 'slideLeft')}
  ${slideMotion('slide-right', 'slideRight')}
  ${slideUpIn()}
  ${slideUpOut()}
  ${slideDownIn()}
  ${slideDownOut()}
  ${slideLeftIn()}
  ${slideLeftOut()}
  ${slideRightIn()}
  ${slideRightOut()}

`;

// Swing Motion

const swingMotion = (className, keyFrameName) => css`
  .${className}-enter, .${className}-appear {
    ${motionCommon()} animation-play-state: paused;
  }
  .${className}-enter.${className}-enter-active,
    .${className}-appear.${className}-appear-active {
    animation-name: ${keyFrameName}In;
    animation-play-state: running;
  }
`;

export const addSwingMotion = () => css`
  ${swingMotion('swing', 'swing')} ${swingIn()};
`;

// Zoom Motion

const zoomMotion = (
  className,
  keyFrameName,
  duration = transitions.animationDurationBase,
) => css`
  ${makeMotion(className, keyFrameName, duration)}
  .${className}-enter,
  .${className}-appear {
    transform: scale(0);
    animation-timing-function: ${transitions.easeOutCirc};
  }
  .${className}-leave {
    animation-timing-function: ${transitions.easeInOutCirc};
  }
`;

export const addZoomMotion = () => css`
  // For Modal, Select choosen item
  ${zoomMotion('zoom', 'zoom')}
  // For Popover, Popconfirm, Dropdown
  ${zoomMotion('zoom-big', 'zoomBig')}
  // For Tooltip
  ${zoomMotion('zoom-big-fast', 'zoomBig', transitions.animationDurationFast)}
  ${zoomMotion('zoom-up', 'zoomUp')}
  ${zoomMotion('zoom-down', 'zoomDown')}
  ${zoomMotion('zoom-left', 'zoomLeft')}
  ${zoomMotion('zoom-right', 'zoomRight')}
  ${zoomIn()}
  ${zoomOut()}
  ${zoomBigIn()}
  ${zoomBigOut()}
  ${zoomUpIn()}
  ${zoomUpOut()}
  ${zoomDownIn()}
  ${zoomDownOut()}
  ${zoomLeftIn()}
  ${zoomLeftOut()}
  ${zoomRightIn()}
  ${zoomRightOut()}

`;
