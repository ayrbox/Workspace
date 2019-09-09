import React, { ReactElement, FC } from 'react'

import CalendarContext from './CalendarContext';
import getMonthDays from '../../utils/getMonthDays';

import { WORKSPACES, SHIFTS, UNKNOWN_WORKSPACE } from '../../constants';

interface CalendarProps {
  children: ReactElement | ReactElement[];
  year?: number,
  month?: number,
}

const defaultWorkspace = WORKSPACES.find(({ isDefault }) => isDefault);

export const Calendar: FC<CalendarProps> = ({
  children,
  year,
  month,
}: CalendarProps) => {
  const days = getMonthDays(year = 2019, month = 8);
  return (
    <CalendarContext.Provider value={{
      days: days,
      shifts: SHIFTS,
      defaultWorkspace: defaultWorkspace || UNKNOWN_WORKSPACE,
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
