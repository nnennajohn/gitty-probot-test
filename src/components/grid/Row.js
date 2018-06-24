// @flow
import PropTypes from 'prop-types';
import styled from 'styled-components';

import config, { DIMENSION_NAMES } from './gridConfig';

const ModificatorType = PropTypes.oneOf(DIMENSION_NAMES);

const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  margin-right: ${(p) => (config(p).gutterWidth / 2) * -1}rem;
  margin-left: ${(p) => (config(p).gutterWidth / 2) * -1}rem;
  ${(p) =>
    p.reverse &&
    `
    flex-direction: row-reverse;
  `}
  ${(p) =>
    p.start &&
    config(p).media[p.start]`
    justify-content: flex-start;
    text-align: start;
  `}
  ${(p) =>
    p.center &&
    config(p).media[p.center]`
    justify-content: center;
    text-align: center;
  `}
  ${(p) =>
    p.end &&
    config(p).media[p.end]`
    justify-content: flex-end;
    text-align: end;
  `}
  ${(p) =>
    p.top &&
    config(p).media[p.top]`
    align-items: flex-start;
  `}
  ${(p) =>
    p.middle &&
    config(p).media[p.middle]`
    align-items: center;
  `}
  ${(p) =>
    p.bottom &&
    config(p).media[p.bottom]`
    align-items: flex-end;
  `}
  ${(p) =>
    p.around &&
    config(p).media[p.around]`
    justify-content: space-around;
  `}
  ${(p) =>
    p.between &&
    config(p).media[p.between]`
    justify-content: space-between;
  `}
  ${(p) =>
    p.first &&
    config(p).media[p.first]`
    order: -1;
  `}
  ${(p) =>
    p.last &&
    config(p).media[p.last]`
    order: 1;
  `}
  ${(p) => config(p).media.sm`
    margin-left: 1rem;
    margin-right: 1rem;
  `}
`;

Row.displayName = 'Row';

// $FlowFixMe
Row.propTypes = {
  reverse: PropTypes.bool,
  start: ModificatorType,
  center: ModificatorType,
  end: ModificatorType,
  top: ModificatorType,
  middle: ModificatorType,
  bottom: ModificatorType,
  around: ModificatorType,
  between: ModificatorType,
  first: ModificatorType,
  last: ModificatorType,
  children: PropTypes.node,
};

export default Row;
