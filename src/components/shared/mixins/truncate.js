// @flow

/**
 * CSS to represent truncated text with an ellipsis.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...truncate('250px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${truncate('250px')}
 *   background: papayawhip;
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   'display': 'inline-block',
 *   'maxWidth': '250px',
 *   'overflow': 'hidden',
 *   'textOverflow': 'ellipsis',
 *   'whiteSpace': 'nowrap',
 *   'wordWrap': 'normal'
 * }
 */

function truncate(width?: string | number = '100%'): Object {
  return {
    display: 'inline-block',
    maxWidth: width,
    minWidth: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    wordWrap: 'normal',
  };
}

export default truncate;
