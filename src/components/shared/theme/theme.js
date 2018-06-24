// @flow

// Export theme to theme provider
// Every property here is globally available in styledComponents when interpolating a function like so:
// ${(props) => props.theme}
// Or using import { withTheme } from 'styledComponents';

// TODO: Explore more theme color later.
// https://jsfiddle.net/nnennajohn/qg0o3zb9/7/

import {
  fadeIn,
  fadeOut,
  fadeAndScaleIn,
  pulsate,
  growAndFadeIn,
  shrinkAndFadeOut,
} from './theme-keyframes';
import transitions from './theme-transitions';
import * as animations from './theme-animations';
import colors from './theme-colors';

import {
  color,
  spacing,
  breakpoint,
  pageMargin,
  pageMargins,
  typography,
} from '../styles';

import {
  fontFallBackStack,
  primaryFontStack,
  monoFontStack,
  borderRadius,
  fontSize,
  gridSize,
  primaryFontFamily,
  secondaryFontFamily,
  codeFontFamily,
  layers,
  baseHeading,
  h900,
  h800,
  h700,
  h600,
  h500,
  h400,
  h300,
  h200,
  h100,
} from './theme-typography';

const theme = {
  mode: 'light',
  colors,
  borderRadius,
  fontSize,
  gridSize,
  primaryFontFamily,
  secondaryFontFamily,
  codeFontFamily,
  layers,
  baseHeading,
  h900,
  h800,
  h700,
  h600,
  h500,
  h400,
  h300,
  h200,
  h100,

  color,
  spacing,
  breakpoint,
  pageMargin,
  pageMargins,
  typography,

  // Media queries breakpoints
  gridConfig: {
    // Defaults
    gridSize: 24,
    gutterWidth: 1, // rem
    outerMargin: 1, // rem
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76, // rem
    },
  },

  breakpoints: ['40em', '64em', '75em', '85em'],

  // Effects
  transitions,
  keyframes: {
    fadeIn,
    fadeOut,
    fadeAndScaleIn,
    pulsate,
    growAndFadeIn,
    shrinkAndFadeOut,
  },
  animations: {
    ...animations,
  },
};

export default theme;
