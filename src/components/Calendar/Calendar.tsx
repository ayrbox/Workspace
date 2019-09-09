import React, { ReactElement, FC } from 'react'

import CalendarContext from './CalendarContext';
import getMonthDays from '../../utils/getMonthDays';

import { workSpaceLocation, shifts } from '../../constants';

interface CalendarProps {
  children: ReactElement | ReactElement[];
  year?: number,
  month?: number,
}

const defaultWorkspace = Object.entries(workSpaceLocation)
  .map(([key, value]) => ({ key, ...value }))
  .find(({ isDefault }) => isDefault);


export const Calendar: FC<CalendarProps> = ({
  children,
  year,
  month,
}: CalendarProps) => {
  const days = getMonthDays(year = 2019, month = 8);
  return (
    <CalendarContext.Provider value={{
      days: days,
      shifts: shifts,
      defaultWorkspace: defaultWorkspace,
    }}>
      <div className="calendar-container" style={{ overflow: 'scroll', width: '100%' }}>
        <table className="table table-dark table-striped table-bordered">
          {children} 
        </table>
      </div>
    </CalendarContext.Provider>
  )
}

export default Calendar;
