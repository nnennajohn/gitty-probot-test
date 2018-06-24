// @flow

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Header from '../components/header';
import {
  injectGlobalStyles,
  injectThemeReset,
  injectThemeHelperClasses,
} from '../components/shared';
// import { height } from 'window-size';

injectThemeReset();
injectGlobalStyles();
injectThemeHelperClasses();

type Props = {
  children: any,
  data: any,
};

const Layout = ({ children, data }: Props) => (
  <div style={{ width: '100vw', height: '100vh', overflowY: 'scroll' }}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div>
      <div class="intro-waves full-width">
        <div class="waves-wrapper">
          <div id="waves" class="waves">
            <svg viewBox="0 0 800 600">
              <defs>
                <linearGradient
                  x1="0%"
                  y1="0%"
                  x2="101.999998%"
                  y2="100.999999%"
                  id="linearGradient-1"
                >
                  <stop stop-color="#3023AE" offset="0%" />
                  <stop stop-color="#C96DD8" offset="100%" />
                </linearGradient>
                <linearGradient
                  x1="0.25781251%"
                  y1="49.7500002%"
                  x2="101.257813%"
                  y2="49.7500002%"
                  id="linearGradient-2"
                >
                  <stop stop-color="#3023AE" offset="0%" />
                  <stop stop-color="#53A0FE" offset="47.5247532%" />
                  <stop stop-color="#B4ED50" offset="100%" />
                </linearGradient>
              </defs>
              <path
                d="M0,13 C66.6666667,-3.66666667 133.333333,-3.66666667 200,13 C266.666667,29.6666667 333.333333,29.6666667 400,13 C466.666667,-3.66666667 533.333333,-3.66666667 600,13 C666.666667,29.6666667 733.333333,29.6666667 800,13 L800,563 L0,563 L0,13 Z"
                id="Shape"
                fill="#E8EDFA"
              />
              <path
                d="M0,13 C66.6666667,-3.66666667 133.333333,-3.66666667 200,13 C266.666667,29.6666667 333.333333,29.6666667 400,13 C466.666667,-3.66666667 533.333333,-3.66666667 600,13 C666.666667,29.6666667 733.333333,29.6666667 800,13 L800,563 L0,563 L0,13 Z"
                id="Shape"
                fill-opacity="0.100000001"
                fill="url(#linearGradient-1)"
              />
              <path
                d="M0,13 C66.6666667,-3.66666667 133.333333,-3.66666667 200,13 C266.666667,29.6666667 333.333333,29.6666667 400,13 C466.666667,-3.66666667 533.333333,-3.66666667 600,13 C666.666667,29.6666667 733.333333,29.6666667 800,13 L800,563 L0,563 L0,13 Z"
                id="Shape"
                fill-opacity="0.200000003"
                fill="url(#linearGradient-2)"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {children()}
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

// $FlowFixMe
export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
