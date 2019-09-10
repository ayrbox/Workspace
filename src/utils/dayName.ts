import moment from 'moment';

const dayName = (date: Date): string => {
  return moment(date).format('DD');
};

export default dayName;
