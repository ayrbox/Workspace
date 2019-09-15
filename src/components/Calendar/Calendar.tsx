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
    let year_ = currentYear;
    let month_ = currentMonth + direction;

    if (month_ < 0) {
      year_ = currentYear - 1;
      month_ = 11;
    }

    if (month_ > 11) {
      year_ = currentYear + 1;
      month_ = 0;
    }

    setMonth(month_);
    setYear(year_);
  };

  const days = getMonthDays(currentYear, currentMonth);
  return (
    <CalendarContext.Provider
      value={{
        days: days,
        shifts: SHIFTS,
        defaultWorkspace: defaultWorkspace || UNKNOWN_WORKSPACE,
        onNavigate: handleNavigation,
      }}
    >
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
