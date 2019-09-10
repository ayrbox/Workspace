import { generateRandomSchedule, flattenToArray, spanSchedule } from './spanSchedule';
import { ShiftType } from '../constants';
import dateKey from './dateKey';

const sampleDays: Date[] = [
  new Date(2019, 8, 10),
  new Date(2019, 8, 11),
  new Date(2019, 8, 12),
  new Date(2019, 8, 13),
  new Date(2019, 8, 14),
];

const sampleShifts: ShiftType[] = [
  {
    key: 'AM',
    label: 'Morning',
  },
  {
    key: 'PM',
    label: 'Evening',
  },
];

describe('generateRandomSchedule', () => {
  it('returns an object', () => {
    const randomSchedule = generateRandomSchedule(sampleDays, sampleShifts);

    expect(Object.keys(randomSchedule).length).toBe(sampleDays.length);
    expect(Object.keys(randomSchedule)).toEqual(sampleDays.map(d => dateKey(d)));
  });
});

describe('flattenToArray', () => {
  it('return flatten schedule', () => {
    const scheduleToFlatten = {
      '20190910': { AM: 'OFF', PM: 'OFFICE' },
      '20190911': { AM: 'OFFICE', PM: 'OFF' },
      '20190912': { AM: 'HOME', PM: 'OFFICE' },
      '20190913': { AM: 'OFFICE', PM: 'OFFICE' },
      '20190914': { AM: 'OFF', PM: 'OFF' },
    };

    const flat = flattenToArray(scheduleToFlatten);

    expect(flat.length).toEqual(sampleDays.length * sampleShifts.length);
    expect(flat).toMatchSnapshot();
  });
});

describe('spanSchedule', () => {
  it('returns span schedule', () => {
    const flatScheduleToSpan = [
      { dayKey: '20190910', shift: 'AM', workspace: 'HOME', span: 1 },
      { dayKey: '20190910', shift: 'PM', workspace: 'OFF', span: 1 },
      { dayKey: '20190911', shift: 'AM', workspace: 'OFF', span: 1 },
      { dayKey: '20190911', shift: 'PM', workspace: 'HOME', span: 1 },
      { dayKey: '20190912', shift: 'AM', workspace: 'HOME', span: 1 },
      { dayKey: '20190912', shift: 'PM', workspace: 'OFFICE', span: 1 },
      { dayKey: '20190913', shift: 'AM', workspace: 'OFF', span: 1 },
      { dayKey: '20190913', shift: 'PM', workspace: 'OFFICE', span: 1 },
      { dayKey: '20190914', shift: 'AM', workspace: 'OFFICE', span: 1 },
      { dayKey: '20190914', shift: 'PM', workspace: 'OFF', span: 1 },
    ];

    const spanned = spanSchedule(flatScheduleToSpan);
    expect(spanned).toMatchSnapshot();
  });
});
