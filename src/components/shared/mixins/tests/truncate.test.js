// @flow
import truncate from '../truncate';

describe('truncate', () => {
  it('should pass parameter to the value of max-width', () => {
    expect({ ...truncate('300px') }).toMatchSnapshot();
  });

  it('should pass parameter of type integer to the value of max-width', () => {
    expect({ ...truncate(300) }).toMatchSnapshot();
  });

  it('should default max-width to 100%', () => {
    expect({ ...truncate() }).toMatchSnapshot();
  });
});
