import { toLocale } from './locale';

describe('test locale string with jest', () => {
  it('should test passing a number', () => {
    // expect(toLocale(1000)).toBe('1.000');
    expect(toLocale(1000)).toBe('1,000');
  });
});