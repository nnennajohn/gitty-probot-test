// @flow
import { css } from 'styled-components';
import rem from '../mixins/rem';
import colors from './theme-colors';

export const fontFallBackStack = `'-apple-system', 'BlinkMacSystemFont', "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`;

export const primaryFontStack = `'Nunito Sans', ${fontFallBackStack}`;

export const secondaryFontStack = `'avenir-roman', ${fontFallBackStack}`;

export const monoFontStack = `
  "SFMono-Medium", "SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", 'Input Mono', 'Menlo',
  'Inconsolata', 'Roboto Mono', Consolas, Menlo, Courier, monospace
`;
/*
  These theme values are expressed as functions so that if we decide to make
  them dependent on props in the future, it wouldn't require a significant
  refactor everywhere they are being used.
*/
export const borderRadius = () => 3;
export const gridSize = () => 8;
export const fontSize = () => rem(14);
export const primaryFontFamily = () => primaryFontStack;
export const secondaryFontFamily = () => secondaryFontStack;
export const codeFontFamily = () => monoFontStack;

export const layers = {
  card: () => 100,
  dialog: () => 200,
  navigation: () => 300,
  layer: () => 400,
  blanket: () => 500,
  modal: () => 510,
  flag: () => 600,
  spotlight: () => 700,
  tooltip: () => 800,
};

export const baseHeading = (size: number, lineHeight: number) => `
  font-size: ${rem(size)};
  font-style: inherit;
  line-height: ${lineHeight / size};
`;

export const h900 = () => css`
  ${baseHeading(35, 40)} color: ${colors.heading};
  font-weight: 500;
  letter-spacing: -0.01em;
  margin-top: ${gridSize() * 6.5}px;
`;

export const h800 = () => css`
  ${baseHeading(29, 32)} color: ${colors.heading};
  font-weight: 600;
  letter-spacing: -0.01em;
  margin-top: ${gridSize() * 5}px;
`;

export const h700 = () => css`
  ${baseHeading(24, 28)} color: ${colors.heading};
  font-weight: 500;
  letter-spacing: -0.01em;
  margin-top: ${gridSize() * 5}px;
`;

export const h600 = () => css`
  ${baseHeading(20, 24)} color: ${colors.heading};
  font-weight: 500;
  letter-spacing: -0.008em;
  margin-top: ${gridSize() * 3.5}px;
`;

export const h500 = () => css`
  ${baseHeading(16, 20)} color: ${colors.heading};
  font-weight: 600;
  letter-spacing: -0.006em;
  margin-top: ${gridSize() * 3}px;
`;

export const h400 = () => css`
  ${baseHeading(14, 16)} color: ${colors.heading};
  font-weight: 600;
  letter-spacing: -0.003em;
  margin-top: ${gridSize() * 2}px;
`;

export const h300 = () => css`
  ${baseHeading(12, 16)} color: ${colors.subtleHeading};
  font-weight: 600;
  margin-top: ${gridSize() * 2.5}px;
  text-transform: uppercase;
`;

export const h200 = () => css`
  ${baseHeading(12, 16)} color: ${colors.subtleHeading};
  font-weight: 600;
  margin-top: ${gridSize() * 2}px;
`;

export const h100 = () => css`
  ${baseHeading(12, 16)} color: ${colors.subtleHeading};
  font-weight: normal;
  margin-top: ${gridSize() * 2}px;
`;
