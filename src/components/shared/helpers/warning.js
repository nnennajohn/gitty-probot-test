// @flow

const __DEV__ = process.env.NODE_ENV !== 'production';

let warning = (condition: boolean, format: string, args: any) => {};

if (__DEV__) {
  const printWarning = (format, args) => {
    const len = arguments.length;
    // eslint-disable-next-line
    args = new Array(len > 2 ? len - 2 : 0);
    for (let key = 2; key < len; key++) {
      // eslint-disable-next-line
      args[key - 2] = arguments[key];
    }
    let argIndex = 0;
    const message = `Warning: ${format.replace(/%s/g, () => {
      return args[argIndex++];
    })}`;
    if (typeof console !== 'undefined') {
      // eslint-disable-next-line
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = (condition: boolean, format: string, args: any) => {
    const len = arguments.length;
    // eslint-disable-next-line
    args = new Array(len > 2 ? len - 2 : 0);
    for (let key = 2; key < len; key++) {
      // eslint-disable-next-line
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
          'message argument',
      );
    }
    if (!condition) {
      // eslint-disable-next-line
      printWarning.apply(null, [format].concat(args));
    }
  };
}

export const theWarning = warning;

const warned: { [msg: string]: boolean } = {};
export default (valid: boolean, message: string): void => {
  if (!valid && !warned[message]) {
    warning(false, message);
    warned[message] = true;
  }
};
