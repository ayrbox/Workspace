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

export const generateRandomSchedule = (days: Date[], shifts: ShiftType[]): scheduleType => {
  return days.reduce((schedule: scheduleType, day): scheduleType => {
    const dKey = dateKey(day);
    return {
      ...schedule,
      [dKey]: shifts.reduce((shifts: shiftScheduleType, shift): shiftScheduleType => {
        const rndSpace = Math.floor(Math.random() * Math.floor(3));
        const { key } = WORKSPACES[rndSpace];
        return {
          ...shifts,
          [shift.key]: isWeekend(day) ? 'NONWORKINGDAY' : key,
        };
      }, {}),
    };
  }, {});
};

export const flattenToArray = (schedule: scheduleType): spanScheduleType[] => {
  // flatten the structure
  const flattenScheduleDays = Object.entries(schedule).map(([key, value]) => ({
    dayKey: key,
    shifts: value,
  }));

  const flattenScheduleShifts = flattenScheduleDays.map(({ dayKey, shifts }) => {
    return Object.entries(shifts).map(([key, value]) => ({
      dayKey: dayKey,
      shift: key,
      workspace: value,
      span: 1,
    }));
  });

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

  for (let i = 0; i < flatScheule.length; i++) {
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
      cnt++;
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
