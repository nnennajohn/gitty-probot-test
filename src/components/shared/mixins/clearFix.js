// @flow

/**
 * CSS to contain a float (credit to CSSMojo).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *    ...clearFix(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${clearFix()}
 * `
 *
 * // CSS as JS Output
 *
 * '&::after': {
 *   'clear': 'both',
 *   'content': '""',
 *   'display': 'table'
 * }
 */

function clearFix(parent?: string = '&'): Object {
  const pseudoSelector = `${parent}::after`;
  const beforeSelector = `${parent}::before`;
  return {
    zoom: 1,
    [beforeSelector]: {
      content: '""',
      display: 'table',
    },
    [pseudoSelector]: {
      clear: 'both',
      content: '""',
      display: 'table',
    },
  };
}

export default clearFix;
