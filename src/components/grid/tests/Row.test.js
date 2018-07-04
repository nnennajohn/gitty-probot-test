// @flow
import React from 'react';
import renderer from 'react-test-renderer';

import { Row } from '../index';

test('Styles matches Scrollable', () => {
  const tree = renderer.create(<Row />).toJSON();
  expect(tree).toMatchSnapshot();
});
