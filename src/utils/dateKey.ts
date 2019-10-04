import moment from 'moment';

const dateKey = (date: Date): string => moment(date).format('YYYYMMDD');

export default dateKey;
