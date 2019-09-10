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

const spanSchedule = (schedule: scheduleType) => {
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

  const flatSchedule = flatten(flattenScheduleShifts)


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
          [shift.key]: key
        }
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