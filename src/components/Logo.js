import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from '../images/logo.svg';

import reactLogo from '../images/react.svg';
import reduxLogo from '../images/redux.svg';
import nodejsLogo from '../images/nodejs.svg';
import angularLogo from '../images/angular.svg';
import firebaseLogo from '../images/firebase.svg';
import githubLogo from '../images/github.svg';
import graphqlLogo from '../images/graphql.svg';
import gatsbyLogo from '../images/gatsby.svg';
import webpackLogo from '../images/webpack.svg';
import circleCILogo from '../images/circleci.svg';

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

const BrandLogosWrapper = styled(LogoImgWrapper)`
  padding: 0 1rem;
  opacity: 0.5;
  img {
    width: 3rem;
  }
`;
const BrandLogosWrapperContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BrandTiles = () => {
  return (
    <BrandLogosWrapperContainer>
      <BrandLogosWrapper>
        <img src={reactLogo} alt="React" />
      </BrandLogosWrapper>
      <BrandLogosWrapper>
        <img src={reduxLogo} alt="Redux" />
      </BrandLogosWrapper>
      <BrandLogosWrapper>
        <img src={nodejsLogo} alt="Node JS" />
      </BrandLogosWrapper>
      <BrandLogosWrapper>
        <img src={angularLogo} alt="Angular" />
      </BrandLogosWrapper>
      <BrandLogosWrapper>
        <img src={firebaseLogo} alt="Firebase" />
      </BrandLogosWrapper>
      <BrandLogosWrapper>
        <img src={githubLogo} alt="Github" />
      </BrandLogosWrapper>
      <BrandLogosWrapper>
        <img src={graphqlLogo} alt="GraphQL" />
      </BrandLogosWrapper>
      <BrandLogosWrapper>
        <img src={webpackLogo} alt="Webpack" />
      </BrandLogosWrapper>
      <BrandLogosWrapper>
        <img src={circleCILogo} alt="CircleCI" />
      </BrandLogosWrapper>
    </BrandLogosWrapperContainer>
  );
};

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
