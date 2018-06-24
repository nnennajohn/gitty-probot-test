// @flow

/**
 * Convert pixel value to rems. The default base value is 14px, but can be changed by passing a
 * second argument to the function.
 * @function
 * @param {number} pxval
 * @param {number} [base=14]
 * @example
 * // Styles as object usage
 * const styles = {
 *   'height': rem(14)
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   height: ${rem(14)}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'height': '1rem'
 * }
 */

const rem = ($sizeValue: number, base?: number = 14): string => {
  const remSize = $sizeValue / base;
  return `${remSize}rem`;
};

export default rem;
