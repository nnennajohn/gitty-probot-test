// @flow
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import config, { DIMENSION_NAMES } from './gridConfig';
// import Box from '../../Box';
// const Container = Box.extend`
const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  ${(p) =>
    p.fluid &&
    css`
      padding-right: ${(pp) => `${config(pp).outerMargin}rem`};
      padding-left: ${(pp) => `${config(pp).outerMargin}rem`};
    `} ${(p) =>
    !p.fluid &&
    css`
      ${DIMENSION_NAMES.map(
        (t) =>
          config(p).container[t] &&
          config(p).media[t]`
        max-width: ${(z) => config(z).container[t]}rem;
      `,
      )};
    `};
`;

Container.displayName = 'Container';

// $FlowFixMe
Container.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node,
};

export const Grid = Container;

export default Container;
