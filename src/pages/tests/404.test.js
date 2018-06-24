import React from 'react';

import NotFoundPage from '../404';

const testIf =
  process.env.MODE && process.env.MODE === 'skipsnapshots' ? test.skip : test;

testIf('Mostrar el HTML del componente', () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
