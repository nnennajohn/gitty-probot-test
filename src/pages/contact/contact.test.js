import React from 'react';

import ContactPage from './index';

const testIf =
  process.env.MODE !== undefined && process.env.MODE === 'skipsnapshots'
    ? test.skip
    : test;

testIf('Contact Page', () => {
  const wrapper = shallow(<ContactPage />);
  expect(wrapper).toMatchSnapshot();
});
