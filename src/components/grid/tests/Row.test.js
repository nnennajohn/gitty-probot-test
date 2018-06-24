// @flow
import React from 'react';
import renderer from 'react-test-renderer';

import { Row } from '../index';

test('Styles matches Scrollable', () => {
  const tree = renderer.create(<Row />).toJSON();
  expect(tree).toMatchSnapshot();
  // expect(tree).toHaveStyleRule('display', 'flex');
  // expect(tree).toHaveStyleRule('flex', '0 1 auto');
  // expect(tree).toHaveStyleRule('flex-direction', 'row');
  // expect(tree).toHaveStyleRule('flex-wrap', 'wrap');
  // expect(tree).toHaveStyleRule('list-style', 'none');
});
