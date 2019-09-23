import { dayName, dayNumber } from './dayName';

describe('utils/dayName', () => {
  describe('dayName', () => {
    it.each([
      [new Date(2019, 8, 23), 'Monday'],
      [new Date(2019, 8, 24), 'Tuesday'],
      [new Date(2019, 8, 25), 'Wednesday'],
      [new Date(2019, 8, 26), 'Thursday'],
      [new Date(2019, 8, 27), 'Friday'],
      [new Date(2019, 8, 28), 'Saturday'],
      [new Date(2019, 8, 29), 'Sunday'],
    ])('should return %s as %s', (input, expected) => {
      const result = dayName(input as Date);
      expect(result).toEqual(expected);
    });
  });

  describe('dayNumber', () => {
    it.each([
      [new Date(2019, 8, 23), '23'],
      [new Date(2019, 8, 24), '24'],
      [new Date(2019, 8, 25), '25'],
      [new Date(2019, 8, 26), '26'],
      [new Date(2019, 8, 27), '27'],
      [new Date(2019, 8, 28), '28'],
      [new Date(2019, 8, 29), '29'],
    ])('should return %s as %s', (input, expected) => {
      const result = dayNumber(input as Date);
      expect(result).toEqual(expected);
    });
  });
});
