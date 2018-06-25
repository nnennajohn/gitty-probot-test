// @flow

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { css } from 'styled-components';
import Link from 'gatsby-link';

import './fonts.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

import {
  injectGlobalStyles,
  injectThemeReset,
  injectThemeHelperClasses,
} from '../components/shared';

injectThemeReset();
injectGlobalStyles();
injectThemeHelperClasses();

const HeaderWrapper = styled(Header)`
  ${(props) =>
    props.isHome &&
    css`
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      z-index: 3;
    `};
`;

const WavesWrapper = styled('div')`
  position: absolute;
  width: 100%;
  height: auto;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
  background-color: white;
`;

const PageWrapper = styled('div')`
  width: 100vw;
  height: calc(100vh - 110px);
  overflow-y: scroll;
  position: relative;
  z-index: 1;
`;

const InnerPageWrapper = styled('div')`
  ${(props) =>
    props.isHome &&
    css`
      margin-top: 100px;
    `};
`;

type Props = {
  children: any,
  data: {
    site: {
      siteMetadata: {
        title: string,
        permalink: string,
        description: string,
        githubUrl: string,
        toc: any,
      },
    },
  },
  location: {
    pathname: any,
  },
};

const Waves = () => (
  <div className="intro-waves full-width">
    <div className="waves-wrapper">
      <div id="waves" className="waves">
        <svg viewBox="0 0 800 600">
          <defs>
            <linearGradient
              x1="0%"
              y1="0%"
              x2="101.999998%"
              y2="100.999999%"
              id="linearGradient-1"
            >
              <stop stopColor="#3023AE" offset="0%" />
              <stop stopColor="#C96DD8" offset="100%" />
            </linearGradient>
            <linearGradient
              x1="0.25781251%"
              y1="49.7500002%"
              x2="101.257813%"
              y2="49.7500002%"
              id="linearGradient-2"
            >
              <stop stopColor="#3023AE" offset="0%" />
              <stop stopColor="#53A0FE" offset="47.5247532%" />
              <stop stopColor="#B4ED50" offset="100%" />
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
            fillOpacity="0.100000001"
            fill="url(#linearGradient-1)"
          />
          <path
            d="M0,13 C66.6666667,-3.66666667 133.333333,-3.66666667 200,13 C266.666667,29.6666667 333.333333,29.6666667 400,13 C466.666667,-3.66666667 533.333333,-3.66666667 600,13 C666.666667,29.6666667 733.333333,29.6666667 800,13 L800,563 L0,563 L0,13 Z"
            id="Shape"
            fillOpacity="0.200000003"
            fill="url(#linearGradient-2)"
          />
        </svg>
      </div>
    </div>
  </div>
);

const Layout = ({
  data: {
    site: {
      siteMetadata: { title, permalink, description, githubUrl, toc },
    },
  },
  location: { pathname },
  children,
}: Props) => (
  <Fragment>
    <Helmet>
      <link
        rel="shortcut icon"
        type="image/png"
        href="/icon-learn.png"
        sizes="16x16 32x32 64x64"
      />
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta
        property="og:image"
        content="https://www.learnstorybook.com/opengraph-cover.jpg"
      />
      <meta
        name="twitter:image"
        content="https://www.learnstorybook.com/opengraph-cover.jpg"
      />
      <meta property="og:url" content={permalink} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta
        name="google-site-verification"
        content="YjriYM9U-aWxhu_dv3PWfCFQ3JNkb7ndk7r_mUlCKAY"
      />
    </Helmet>

    <HeaderWrapper
      title={title}
      githubUrl={githubUrl}
      inverse={pathname === '/'}
      isHome={pathname === '/'}
      framework={pathname.split('/')[1]}
      firstChapter={toc[0]}
    />
    {pathname === '/' && (
      <WavesWrapper>
        <Waves />
      </WavesWrapper>
    )}
    <PageWrapper>
      {!(pathname === '/') && <Waves />}
      <InnerPageWrapper isHome={pathname === '/'}>
        {children()}
      </InnerPageWrapper>
    </PageWrapper>
    <Footer />
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Layout;

// $FlowFixMe
export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        githubUrl
        permalink
        toc
      }
    }
  }
`;
