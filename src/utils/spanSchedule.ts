import { scheduleType, shiftScheduleType } from '../types/scheduleType';
import dateKey from './dateKey';
import { WORKSPACES, ShiftType } from '../constants';
import flatten from 'lodash/flatten';

export type spanScheduleType = {
  dayKey: string;
  shift: string;
  workspace: string;
  span: number;
};

const isWeekend = (day: Date): boolean => {
  const d = day.getDay();
  return d === 6 || d === 0;
};

export const generateRandomSchedule = (days: Date[], shifts: ShiftType[]): scheduleType => days.reduce((schedule: scheduleType, day): scheduleType => {
    const dKey = dateKey(day);
    return {
      ...schedule,
      [dKey]: shifts.reduce((randomShifts: shiftScheduleType, shift): shiftScheduleType => {
        const rndSpace = Math.floor(Math.random() * Math.floor(2));
        const { key } = WORKSPACES[rndSpace];
        return {
          ...randomShifts,
          [shift.key]: isWeekend(day) ? 'NONWORKINGDAY' : key,
        };
      }, {}),
    };
  }, {});

export const blankSchedule = (days: Date[], shifts: ShiftType[]): scheduleType => days.reduce((schedule: scheduleType, day): scheduleType => {
    const dKey = dateKey(day);
    return {
      ...schedule,
      [dKey]: shifts.reduce((blankShifts: shiftScheduleType, shift): shiftScheduleType => {
        const { key } = WORKSPACES[1];
        return {
          ...blankShifts,
          [shift.key]: isWeekend(day) ? 'NONWORKINGDAY' : key,
        };
      }, {}),
    };
  }, {});

export const flattenToArray = (schedule: scheduleType): spanScheduleType[] => {
  // flatten the structure
  const flattenScheduleDays = Object.entries(schedule).map(([key, value]) => ({
    dayKey: key,
    shifts: value,
  }));

  const flattenScheduleShifts = flattenScheduleDays.map(({ dayKey, shifts }) => Object.entries(shifts).map(([key, value]) => ({
      dayKey,
      shift: key,
      workspace: value,
      span: 1,
    })));

  const flatSchedule = flatten(flattenScheduleShifts);

  return flatSchedule;
};

export function spanSchedule(flatScheule: spanScheduleType[]): spanScheduleType[] {
  let current: spanScheduleType = {
    dayKey: '',
    shift: '',
    workspace: '',
    span: 0,
  };

  let cnt = 0;

  const spannedSchedule: spanScheduleType[] = [];

  for (let i = 0; i < flatScheule.length; i += 1) {
    if (flatScheule[i].workspace !== current.workspace) {
      if (cnt > 0) {
        // document.write(current + ' comes --> ' + cnt + ' times<br>');
        // console.log(`${current.workspace} comes ${cnt} times`);
        spannedSchedule.push({
          ...current,
          span: cnt,
        });
      }
      current = flatScheule[i];
      cnt = 1;
    } else {
      cnt += 1;
    }
  }
  if (cnt > 0) {
    // console.log(`${current.workspace} comes ${cnt} times`);
    spannedSchedule.push({
      ...current,
      span: cnt,
    });
  }
  return spannedSchedule;
}

export default spanSchedule;
