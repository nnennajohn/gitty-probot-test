// @flow
import { css } from 'styled-components';

const THEME_CONF = 'gridConfig';
const THEME_CONF_BREAKPOINTS = 'breakpoints';

export const BASE_BREAKPOINTS = ['40em', '64em', '75em', '85em'];
export type GridConfigType = {
  gridSize: number,
  gutterWidth: number,
  outerMargin: number,
  mediaQuery: string,
  container: Object,
  media: any,
  breakpoints?: {
    xs: number,
    sm: number,
    md: number,
    lg: number,
    xl: number,
  },
};
export const BASE_CONF = {
  gridSize: 12,
  gutterWidth: 1,
  outerMargin: 2,
  mediaQuery: 'only screen',
  container: {
    sm: 46,
    md: 61,
    lg: 76,
  },
};

const configCache: any = [];
const makeCacheId = (props) =>
  JSON.stringify((props.theme && props.theme[THEME_CONF]) || {});
const makeCachedBreakpoints = (props) =>
  JSON.stringify((props.theme && props.theme[THEME_CONF_BREAKPOINTS]) || []);

const resolveConfig = (props): GridConfigType => {
  const themeConf = (props.theme && props.theme[THEME_CONF]) || {};
  const themeConfBreakPoints =
    (props.theme && props.theme[THEME_CONF_BREAKPOINTS]) || BASE_BREAKPOINTS;

  const conf = {
    ...BASE_CONF,
    ...themeConf,
    container: {
      ...BASE_CONF.container,
      ...themeConf.container,
    },
    breakpoints: {
      xs: 0,
      sm: parseInt(themeConfBreakPoints[0], 10),
      md: parseInt(themeConfBreakPoints[1], 10),
      lg: parseInt(themeConfBreakPoints[2], 10),
      xl: parseInt(themeConfBreakPoints[3], 10),
    },
    media: undefined,
  };

  conf.media = Object.keys(conf.breakpoints).reduce((media, breakpoint) => {
    const breakpointWidth = conf.breakpoints[breakpoint];
    // eslint-disable-next-line
    media[breakpoint] = makeMedia(
      [conf.mediaQuery, breakpoint !== 0 && `(min-width: ${breakpointWidth}em)`]
        .filter(Boolean)
        .join(' and '),
    );
    return media;
  }, {});

  return conf;
};

export const DIMENSION_NAMES = ['xs', 'sm', 'md', 'lg', 'xl'];

export default function config(props: any): GridConfigType {
  const cacheId = {
    gridConfig: makeCacheId(props),
    breakpointsConfig: makeCachedBreakpoints(props),
  };

  if (configCache[0] === cacheId) {
    return (configCache[1]: GridConfigType);
  }

  const conf = resolveConfig(props);

  configCache[0] = cacheId;
  configCache[1] = conf;

  return conf;
}

function makeMedia(media) {
  return (...args: any) => css`
    @media ${media} {
      ${css(...args)};
    }
  `;
}
