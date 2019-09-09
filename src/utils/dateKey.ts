import moment from 'moment';

const dateKey = (date: Date) : string => {
  return moment(date).format('YYYYMMDD')
} 
  
export default dateKey;
