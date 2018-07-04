// @flow
import React from 'react';
import renderer from 'react-test-renderer';

import { Col } from '../index';

test('Styles matches Col', () => {
  const tree = renderer.create(<Col />).toJSON();
  expect(tree).toMatchSnapshot();
});
