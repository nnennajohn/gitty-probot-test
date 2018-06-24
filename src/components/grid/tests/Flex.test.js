// @flow
import React from 'react';
import { create as render } from 'react-test-renderer';
import { Flex } from '../index';

describe('Flex Base Component', () => {
  // Flex
  test('Flex renders', () => {
    const flex = render(<Flex />).toJSON();
    expect(flex).toMatchSnapshot();
  });

  test('Flex renders with props', () => {
    const flex = render(
      <Flex
        flexWrap="wrap"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
      />,
    ).toJSON();
    expect(flex).toMatchSnapshot();
  });

  test('Flex renders with legacy props', () => {
    const flex = render(
      <Flex
        wrap
        flexDirection="column"
        align="center"
        justify="space-between"
      />,
    ).toJSON();
    expect(flex).toMatchSnapshot();
  });

  test('Flex renders with flexDirection prop', () => {
    const flex = render(<Flex flexDirection="column" />).toJSON();
    expect(flex).toMatchSnapshot();
  });

  test('Flex renders with responsive props', () => {
    const flex = render(
      <Flex
        wrap={[true, false]}
        flexDirection={['column', 'row']}
        align={['stretch', 'center']}
        justify={['space-between', 'center']}
      />,
    ).toJSON();
    expect(flex).toMatchSnapshot();
  });
});
