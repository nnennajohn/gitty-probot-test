// @flow

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { css } from 'styled-components';
import Link from 'gatsby-link';

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
        href="/icon-learnstorybook.png"
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

    {/* Would love to get framework from graphql variables but they are not set for the homepage */}
    <HeaderWrapper
      title={title}
      githubUrl={githubUrl}
      inverse={pathname === '/'}
      isHome={pathname === '/'}
      framework={pathname.split('/')[1]}
      firstChapter={toc[0]}
    />
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
    <Footer />
  </Fragment>
);

// const Layout = ({ children, data }: Props) => (
//   <div style={{ width: '100vw', height: '100vh', overflowY: 'scroll' }}>
//     <Helmet
//       title={data.site.siteMetadata.title}
//       meta={[
//         { name: 'description', content: 'Sample' },
//         { name: 'keywords', content: 'sample, something' },
//       ]}
//     />
//     <Header siteTitle={data.site.siteMetadata.title} />
//     <div>
//       <div class="intro-waves full-width">
//         <div class="waves-wrapper">
//           <div id="waves" class="waves">
//             <svg viewBox="0 0 800 600">
//               <defs>
//                 <linearGradient
//                   x1="0%"
//                   y1="0%"
//                   x2="101.999998%"
//                   y2="100.999999%"
//                   id="linearGradient-1"
//                 >
//                   <stop stop-color="#3023AE" offset="0%" />
//                   <stop stop-color="#C96DD8" offset="100%" />
//                 </linearGradient>
//                 <linearGradient
//                   x1="0.25781251%"
//                   y1="49.7500002%"
//                   x2="101.257813%"
//                   y2="49.7500002%"
//                   id="linearGradient-2"
//                 >
//                   <stop stop-color="#3023AE" offset="0%" />
//                   <stop stop-color="#53A0FE" offset="47.5247532%" />
//                   <stop stop-color="#B4ED50" offset="100%" />
//                 </linearGradient>
//               </defs>
//               <path
//                 d="M0,13 C66.6666667,-3.66666667 133.333333,-3.66666667 200,13 C266.666667,29.6666667 333.333333,29.6666667 400,13 C466.666667,-3.66666667 533.333333,-3.66666667 600,13 C666.666667,29.6666667 733.333333,29.6666667 800,13 L800,563 L0,563 L0,13 Z"
//                 id="Shape"
//                 fill="#E8EDFA"
//               />
//               <path
//                 d="M0,13 C66.6666667,-3.66666667 133.333333,-3.66666667 200,13 C266.666667,29.6666667 333.333333,29.6666667 400,13 C466.666667,-3.66666667 533.333333,-3.66666667 600,13 C666.666667,29.6666667 733.333333,29.6666667 800,13 L800,563 L0,563 L0,13 Z"
//                 id="Shape"
//                 fill-opacity="0.100000001"
//                 fill="url(#linearGradient-1)"
//               />
//               <path
//                 d="M0,13 C66.6666667,-3.66666667 133.333333,-3.66666667 200,13 C266.666667,29.6666667 333.333333,29.6666667 400,13 C466.666667,-3.66666667 533.333333,-3.66666667 600,13 C666.666667,29.6666667 733.333333,29.6666667 800,13 L800,563 L0,563 L0,13 Z"
//                 id="Shape"
//                 fill-opacity="0.200000003"
//                 fill="url(#linearGradient-2)"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>
//       <div
//         style={{
//           margin: '0 auto',
//           maxWidth: 960,
//           padding: '0px 1.0875rem 1.45rem',
//           paddingTop: 0,
//         }}
//       >
//         {children()}
//       </div>
//     </div>
//   </div>
// );

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
