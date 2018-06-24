// @flow
import { injectGlobal, css } from 'styled-components';
import { color, typography } from '../styles';

export const bodyStyles = css`
  font-family: ${typography.type.primary};
  font-size: ${typography.size.s3}px;
  color: ${color.darkest};

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${typography.weight.regular};
    margin: 0;
    padding: 0;
  }

  button,
  input,
  textarea,
  select {
    outline: none;
    font-family: ${typography.type.primary};
  }

  sub,
  sup {
    font-size: 0.8em;
  }

  sub {
    bottom: -0.2em;
  }

  sup {
    top: -0.2em;
  }

  b,
  em {
    font-weight: ${typography.weight.bold};
  }

  hr {
    border: none;
    border-top: 1px solid ${color.mediumlight};
    clear: both;
    margin-bottom: 1.25rem;
  }

  code,
  pre {
    font-family: ${typography.type.code};
    font-size: ${typography.size.s2 - 1}px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    display: inline-block;
    padding-left: 2px;
    padding-right: 2px;
    vertical-align: baseline;

    color: ${color.ancillary};
  }

  pre {
    line-height: 18px;
    padding: 11px 1rem;
    white-space: pre-wrap;

    background: rgba(0, 0, 0, 0.05);
    color: ${color.darkest};
    border-radius: 3px;
    margin: 1rem 0;
  }

  @keyframes waveAnimateA {
    0% {
      transform: translate(-80px, 5px);
    }

    100% {
      transform: translate(80px, 0);
    }
  }

  @-webkit-keyframes waveAnimateA {
    0% {
      transform: translate(-80px, 5px);
    }

    100% {
      transform: translate(80px, 0);
    }
  }

  @keyframes waveAnimateB {
    0% {
      transform: translate(-80px, 10px);
    }

    100% {
      transform: translate(80px, 0);
    }
  }

  @-webkit-keyframes waveAnimateB {
    0% {
      transform: translate(-80px, 10px);
    }

    100% {
      transform: translate(80px, 0);
    }
  }

  @keyframes waveAnimateC {
    0% {
      transform: translate(-20px, 5px);
    }

    100% {
      transform: translate(-80px, 10px);
    }
  }

  @-webkit-keyframes waveAnimateC {
    0% {
      transform: translate(-20px, 5px);
    }

    100% {
      transform: translate(-80px, 10px);
    }
  }

  .intro-waves,
  .waves-wrapper {
    position: relative;
    overflow: hidden;
    width: 100%;
  }

  .waves-wrapper {
    height: 124px;
    transform: rotate(180deg);
  }

  .waves {
    position: absolute;
    top: 40px;
    width: calc(100% + 400px);
    margin: 0 0 0 -200px;
  }

  .waves path {
    opacity: 0.4;
    animation: 14s ease-in-out infinite alternate waveAnimateA;
  }

  .waves path:nth-child(2) {
    animation: 14s ease-in-out infinite alternate waveAnimateB;
  }

  .waves path:last-child {
    animation: 14s ease-in-out infinite alternate waveAnimateC;
  }
`;

const injectGlobalStyles = () => {
  // eslint-disable-next-line no-unused-expressions
  injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800');
    body {
      ${bodyStyles}

      background-color: ${color.empty};
      margin: 0;
      overflow-y: auto;
      overflow-x: hidden;
    }
  `;
};

export default injectGlobalStyles;
