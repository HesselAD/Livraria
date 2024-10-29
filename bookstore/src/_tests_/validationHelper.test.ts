// src/__tests__/validationHelper.test.ts

import { isValidTitle } from '../helpers/validationHelper';

describe('Validation Helpers', () => {
  test('isValidTitle should return true for a title with 3 or more characters', () => {
    expect(isValidTitle('ABC')).toBe(true);
  });

  test('isValidTitle should return false for a title with less than 3 characters', () => {
    expect(isValidTitle('AB')).toBe(false);
  });
});