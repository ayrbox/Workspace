import dateKey from './dateKey';

describe('utils/dateKey', () => {
  it('returns value in YYYYMMDD format', () => {
    const testDate = new Date(2018, 9, 23);
    const key_ = dateKey(testDate);
    expect(key_).toEqual('20181023'); // Month index starts from 0
  });
});
