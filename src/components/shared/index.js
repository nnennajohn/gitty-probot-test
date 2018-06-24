// @flow

// Theme stuff
import injectThemeReset from './theme/theme-reset';
import injectThemeHelperClasses from './theme/theme-helper-classes';
import injectGlobalStyles from './theme/theme-global-styles';
import theme from './theme/theme';
import themeVars, {
  THEME_CONF,
  extractThemeOrDefault,
} from './theme/theme-vars-cache';

// Mixins
import block from './mixins/block';
import clearFix from './mixins/clearFix';
import hideText from './mixins/hideText';
import rem from './mixins/rem';
import truncate from './mixins/truncate';
import wordWrap from './mixins/wordWrap';

// Helpers
import shadeColor from './helpers/shade-color';
import warning from './helpers/warning';

export * from './styles';
export {
  // theme
  injectThemeReset,
  injectThemeHelperClasses,
  injectGlobalStyles,
  theme,
  themeVars,
  extractThemeOrDefault,
  // mixins
  block,
  clearFix,
  hideText,
  rem,
  truncate,
  wordWrap,
  // helpers
  shadeColor,
  warning,
};
