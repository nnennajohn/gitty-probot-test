// @flow
import styled from 'styled-components';

const Scrollable = styled.div`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: none;
  -webkit-overflow-scrolling: touch;
`;

Scrollable.displayName = 'Scrollable';

export default Scrollable;
