// @flow

import { css } from 'styled-components';
/**
 * Helper function to display an element as a block that inherits its parents width
 * @param margin value in pixels to remove from width 100%
 */
const block = (margin: number = 0) => {
  return (props: any = {}) => {
    if (props.block) {
      return css`
        width: calc(100% - ${margin}px);
        margin: 10px auto;
      `;
    }
    return ``;
  };
};

export default block;
