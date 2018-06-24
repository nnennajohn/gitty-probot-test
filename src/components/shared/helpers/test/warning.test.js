import { theWarning as warning } from '../warning';

describe('warning', () => {
  it('properly warn', () => {
    expect(() => {
      warning(true);
    }).toThrow(/requires a warning/i);

    expect(() => {
      warning(false);
    }).toThrow(/requires a warning/i);

    // eslint-disable-next-line
    const error = console.error;
    // eslint-disable-next-line
    const mockFn = (console.error = jest.fn());
    // eslint-disable-next-line
    const calls = console.error.mock.calls;

    // should call console.error
    warning(false, 'warning message');

    // should not call console.error
    warning(true, 'warning message');

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(calls[0][0]).toEqual(
      expect.stringMatching(/Warning: warning message/i),
    );
  });
});
