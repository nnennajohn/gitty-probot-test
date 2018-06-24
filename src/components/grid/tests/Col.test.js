// @flow
import React from 'react';
import renderer from 'react-test-renderer';

import { Col } from '../index';

test('Styles matches Col', () => {
  const tree = renderer.create(<Col />).toJSON();
  expect(tree).toMatchSnapshot();
  // expect(tree).toHaveStyleRule('box-sizing', 'border-box');
  // expect(tree).toHaveStyleRule('flex', '0 0 auto');
  // expect(tree).toHaveStyleRule('word-break', 'break-all');
});
