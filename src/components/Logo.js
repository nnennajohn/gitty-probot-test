import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from '../images/logo.svg';

const LogoImgWrapper = styled.span`
  display: inline-block;
  vertical-align: middle;
  width: ${(props) => props.lgWidth};

  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);
  &:hover {
    transform: translate3d(0, -1px, 0);
  }
  &:active {
    transform: translate3d(0, 0, 0);
  }

  img {
    width: ${(props) => props.lgWidth};
    max-width: 100%;
    height: auto;
  }
`;

function Logo({ src, alt, lgWidth, ...props }) {
  return (
    <LogoImgWrapper lgWidth={lgWidth}>
      <img src={src} alt={alt} />
    </LogoImgWrapper>
  );
}

Logo.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  lgWidth: PropTypes.string,
};

Logo.defaultProps = {
  src: logo,
  alt: 'Weekend Projects',
  lgWidth: '140px',
};

export default Logo;
