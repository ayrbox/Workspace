import moment from 'moment';

export const dayName = (date: Date): string => {
  return moment(date).format('dddd');
};

export const dayNumber = (date: Date): string => moment(date).format('DD');

export default {
  dayName,
  dayNumber,
};
