/**
 * @param year
 * @param month 
 */
const getMonthDays = (year: number, month: number): Date[] => {
  const date = new Date(year, month, 1);
  const result: Date[] = [];
  while (date.getMonth() === month) {
    result.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return result;
};

export default getMonthDays;