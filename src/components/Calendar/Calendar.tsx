import React, { useState, ReactElement, FC } from 'react';
import { style } from 'typestyle';

import CalendarContext, { NavigationDirection } from './CalendarContext';
import getMonthDays from '../../utils/getMonthDays';
import Header from './Header';

import { WORKSPACES, SHIFTS, UNKNOWN_WORKSPACE } from '../../constants';

interface CalendarProps {
  children: ReactElement | ReactElement[];
  year: number;
  month: number;
}

const defaultWorkspace = WORKSPACES.find(({ isDefault }) => isDefault);

const calendarClassName = style({
  width: '100%',
  maxWidth: '1000px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '32px',
  margin: '20px auto',
  fontSize: '13px',
  overflow: 'hidden',
});

const innerContainer = style({
  overflowX: 'auto',
  overflowY: 'hidden', // TODO: confirim to be hidden
  padding: '0px',
  border: '1px solid #dee2e6',
});

const calendarTable = style({
  marginLeft: '200px',
  marginBottom: '0px !important',
});

const scrollFixer = style({
  margin: 0,
  padding: 0,
  position: 'relative',
});

export const Calendar: FC<CalendarProps> = ({ children, year, month }: CalendarProps) => {
  const [currentYear, setYear] = useState(year);
  const [currentMonth, setMonth] = useState(month);

  const handleNavigation = (direction: NavigationDirection): void => {
    let newYear = currentYear;
    let newMonth = currentMonth + direction;

    if (newMonth < 0) {
      newYear = currentYear - 1;
      newMonth = 11;
    }

    if (newMonth > 11) {
      newYear = currentYear + 1;
      newMonth = 0;
    }

    setMonth(newMonth);
    setYear(newYear);
  };

  const days = getMonthDays(currentYear, currentMonth);
  return (
    <CalendarContext.Provider
      value={{
        days,
        shifts: SHIFTS,
        defaultWorkspace: defaultWorkspace || UNKNOWN_WORKSPACE,
        onNavigate: handleNavigation,
      }}>
      <div className={calendarClassName}>
        <div className={scrollFixer}>
          <Header monthIndex={currentMonth} year={currentYear} />
          <div className={innerContainer}>
            <table className={`table ${calendarTable}`}>{children}</table>
          </div>
        </div>
      </div>
    </CalendarContext.Provider>
  );
};

export default Calendar;
