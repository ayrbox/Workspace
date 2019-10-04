import dateKey from './dateKey';

describe('utils/dateKey', () => {
  it('returns value in YYYYMMDD format', () => {
    const testDate = new Date(2018, 9, 23);
    const keyOfDate = dateKey(testDate);
    expect(keyOfDate).toEqual('20181023'); // Month index starts from 0
  });
});
