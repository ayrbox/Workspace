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

export function spinIt(flatScheule: spanScheduleType[]): spanScheduleType[] {
  let current: spanScheduleType = {
    dayKey: '',
    shift: '',
    workspace: '',
    span: 0,
  };

  let cnt = 0;

  const spannedSchedule: spanScheduleType[] = [];

  for (let i = 0; i < flatScheule.length; i++) {
    if (flatScheule[i].workspace != current.workspace) {
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

const spanSchedule = (schedule: scheduleType): spanScheduleType[] => {
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

export default spanSchedule;

export const generateRandomSchedule = (days: Date[], shifts: ShiftType[]): scheduleType => {
  return days.reduce((schedule: scheduleType, day): scheduleType => {
    const dKey = dateKey(day);
    return {
      ...schedule,
      [dKey]: shifts.reduce((shifts: shiftScheduleType, shift): shiftScheduleType => {
        const rndSpace = Math.floor(Math.random() * Math.floor(WORKSPACES.length));
        const { key } = WORKSPACES[rndSpace];
        return {
          ...shifts,
          [shift.key]: key,
        };
      }, {}),
    };
  }, {});
};

/**
 * Convert staffSchedule into serial array 
const __scheduleArray = staffSchedule.reduce((__array, daySchedule) => {        
    Object.keys(shifts).forEach(key => {
      if(daySchedule && daySchedule[key])
        __array.push(daySchedule[key]);
      else 
        __array.push('-');
    })    
    return __array;    
  }, []);


  var __counterArray = [], __itemArray = [];  
  var __previous = undefined;
  __scheduleArray.forEach((__item, __index) => {
    if(__previous !== __item) {
      __itemArray.push(__item);
      __counterArray.push(1);
    } else {
      __counterArray[__counterArray.length - 1]++;
    }
    __previous = __item;
  });

  return __itemArray.map((scheduleItem, index) => {    
    return {
      state: scheduleItem,
      span: __counterArray[index]
    };
  });
}
*/
