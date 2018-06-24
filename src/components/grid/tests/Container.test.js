// @flow
import React from 'react';
import renderer from 'react-test-renderer';

import { Container } from '../index';

test('Styles matches Container', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
  // expect(tree).toHaveStyleRule('margin-right', 'auto');
  // expect(tree).toHaveStyleRule('margin-left', 'auto');
  // expect(tree).toHaveStyleRule('box-sizing', 'border-box');
  // expect(tree).toHaveStyleRule('width', '100%');
});
