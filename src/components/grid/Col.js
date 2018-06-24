// @flow
import PropTypes from 'prop-types';
import styled from 'styled-components';

import config, { DIMENSION_NAMES } from './gridConfig';

const ModificatorType = PropTypes.oneOfType([PropTypes.number, PropTypes.bool]);

const offsetProps = DIMENSION_NAMES.map((d) => `${d}Offset`);
const DimensionPropTypes = DIMENSION_NAMES.reduce((propTypes, dimension) => {
  // eslint-disable-next-line
  propTypes[dimension] = ModificatorType;
  // eslint-disable-next-line
  propTypes[dimension + 'Offset'] = PropTypes.number;
  return propTypes;
}, {});

const Col = styled.div`
  box-sizing: border-box;
  flex: 0 0 auto;
  padding-right: ${(p) => config(p).gutterWidth / 2}rem;
  padding-left: ${(p) => config(p).gutterWidth / 2}rem;
  word-break: break-all;

  ${(p) =>
    p.reverse &&
    `
    flex-direction: column-reverse;
  `}
  ${(p) =>
    Object.keys(p)
      // eslint-disable-next-line
      .filter((k) => ~DIMENSION_NAMES.indexOf(k))
      .sort(
        (k1, k2) => DIMENSION_NAMES.indexOf(k1) - DIMENSION_NAMES.indexOf(k2),
      )
      .map(
        (k) =>
          config(p).media[k]`${
            // eslint-disable-next-line
            Number.isInteger(p[k])
              ? // Integer value
                `
        flex-basis: ${(100 / config(p).gridSize) * p[k]}%;
        max-width: ${(100 / config(p).gridSize) * p[k]}%;
        display: block;
      `
              : // Boolean
                p[k]
                ? // Auto-width
                  `
          flex-grow: 1;
          flex-basis: 0;
          max-width: 100%;
          display: block;
        `
                : // Hide element
                  'display: none;'
          }`,
      )}

  ${(p) =>
    Object.keys(p)
      // eslint-disable-next-line
      .filter((k) => ~offsetProps.indexOf(k))
      .map(
        (k) =>
          config(p).media[k.replace(/Offset$/, '')]`
        margin-left: ${(100 / config(p).gridSize) * p[k]}%;
      `,
      )}

  ${(p) => config(p).media.sm`
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  `}
`;

Col.displayName = 'Col';

// $FlowFixMe
Col.propTypes = {
  ...DimensionPropTypes,
  reverse: PropTypes.bool,
  children: PropTypes.node,
};

export default Col;
