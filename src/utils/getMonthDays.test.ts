import getMonthDays from './getMonthDays';

describe('getMonthDays', () => {
  it('should return days 2019, sept', () => {
    const days = getMonthDays(2019, 8).map(d => d.toString());
    expect(days).toMatchSnapshot();
  });
});
