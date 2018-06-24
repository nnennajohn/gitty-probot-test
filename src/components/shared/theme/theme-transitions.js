// @flow

const themeTransitions = {
  duration: '300ms',
  animationDurationSlow: '.3s',
  animationDurationBase: '.2s',
  animationDurationFast: '.1s',
  easeOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  easeIn: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
  easeInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  easeOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
  easeInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
  easeInOutBack: 'cubic-bezier(0.71, -0.46, 0.29, 1.46)',
  easeOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
  easeInCirc: 'cubic-bezier(0.6, 0.04, 0.98, 0.34)',
  easeInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
  easeOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
  easeInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
  easeInOutQuint: 'cubic-bezier(0.86, 0, 0.07, 1)',
  hover: {
    on: 'all 0.2s ease-in',
    off: 'all 0.2s ease-out',
  },
  reaction: {
    on: 'all 0.15s ease-in',
    off: 'all 0.1s ease-out',
  },
  dropdown: {
    off: 'all 0.35s ease-out',
  },
};

export default themeTransitions;
