import React from 'react';
import GatsbyLink from 'gatsby-link';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { color, shadeColor } from './shared';

// prettier-ignore
const LinkWrapper = styled.a`
  display: inline-block;
  transition: all 150ms ease-out;
  text-decoration: none;

  color: ${color.primary};
  > svg path { fill: ${color.primary}; }
  &:hover, &:focus {
    cursor: pointer;
    transform: translate3d(0,-1px,0);
    color: ${shadeColor(color.primary, 8)};
    > svg path { fill: ${shadeColor(color.primary, 8)} }
  }
  &:active {
    transform: translate3d(0,0,0);
    color: ${shadeColor(color.primary, 9)};
    > svg path { fill: ${shadeColor(color.primary, 9)} }
  }

  > svg {
    display: inline-block;
    height: 1em;
    width: 1em;
    vertical-align: text-top;
    position: relative;
    bottom: -.125em;
    margin-right: .4em;
  }



  &.secondary {
    color: ${color.mediumdark};
    > svg path { fill: ${color.mediumdark}; }

    &:hover {
      color: ${color.dark};
      > svg path { fill: ${color.dark}; }
    }

    &:active {
      color: ${color.darker};
      > svg path { fill: ${color.darker}; }
    }
	}

  &.tertiary {
    color: ${color.dark};
    > svg path { fill: ${color.dark}; }

    &:hover {
      color: ${color.darkest};
      > svg path { fill: ${color.darkest}; }
    }

    &:active {
      color: ${color.mediumdark};
      > svg path { fill: ${color.mediumdark}; }
    }
	}

  &.nochrome {
    color: inherit;

    &:hover, &:active {
      color: inherit;
      text-decoration: underline;
    }
	}

  &.inverse {
    color: ${color.lightest};
    > svg path { fill: ${color.lightest}; }

    &:hover {
      color: ${color.lighter};
      > svg path { fill: ${color.lighter}; }
    }

    &:active {
      color: ${color.light};
      > svg path { fill: ${color.light}; }
    }
	}
`;

const LinkGatsby = LinkWrapper.withComponent(GatsbyLink);

function Link({ isGatsby, ...props }) {
  if (isGatsby) {
    return <LinkGatsby {...props} />;
  }
  return <LinkWrapper {...props} />;
}

Link.propTypes = {
  isGatsby: PropTypes.bool,
  children: PropTypes.node,
};

Link.defaultProps = {
  isGatsby: false,
  children: null,
};

export default Link;
