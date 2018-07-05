// @flow
import config, { BASE_CONF, DIMENSION_NAMES } from '../gridConfig';

describe('config', () => {
  describe('BASE_CONF', () => {
    it('should be an object', () => {
      expect(typeof BASE_CONF).toEqual('object');
    });
  });
  describe('DIMENSION_NAMES', () => {
    it('should be an array', () => {
      expect(Array.isArray(DIMENSION_NAMES)).toBeTruthy();
    });
  });
  describe('config()', () => {
    it('should be a function', () => {
      expect(typeof config).toEqual('string');
    });
  });
});
