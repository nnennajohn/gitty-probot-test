import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { icons, color } from './shared';

// prettier-ignore
const Svg = styled.svg`
  display: inline-block;
  vertical-align: middle;
`;

// prettier-ignore
const Path = styled.path`
  fill: ${props => props.fill || color.darkest};
`;

function Icon({ icon, fill, ...props }) {
  return (
    <Svg viewBox="0 0 1024 1024" width="20px" height="20px" {...props}>
      <Path d={icons[icon]} fill={fill} />
    </Svg>
  );
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  fill: PropTypes.string,
};

export default Icon;
