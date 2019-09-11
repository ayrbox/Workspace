import React, { ReactElement, FC } from 'react';
import moment from 'moment';
import { style } from 'typestyle';

import CalendarContext from './CalendarContext';
import getMonthDays from '../../utils/getMonthDays';

import { WORKSPACES, SHIFTS, UNKNOWN_WORKSPACE } from '../../constants';

interface CalendarProps {
  children: ReactElement | ReactElement[];
  year?: number;
  month?: number;
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
  overflow: 'hidden'
});


const calendarHeader = style({
  width: '100%',
  textAlign: 'center',
  paddingBottom: '32px',
  borderBottom: '1px solid #ddd',
  marginBottom: '32px',
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
})

const scrollFixer = style({
  margin: 0,
  padding: 0,
  position: 'relative',
})


export const Calendar: FC<CalendarProps> = ({ children, year, month }: CalendarProps) => {
  const days = getMonthDays(year || 2019, month || 8);
  return (
    <CalendarContext.Provider
      value={{
        days: days,
        shifts: SHIFTS,
        defaultWorkspace: defaultWorkspace || UNKNOWN_WORKSPACE,
      }}
    >
      <div className={calendarClassName}>
        <div className={scrollFixer}>
          <div className={calendarHeader}>
            <h4>
              {moment(month, 'MM').format('MMMM')}
              {' '}
              {year}
            </h4>
          </div>
          <div className={innerContainer}>
            <table className={`table ${calendarTable}`}>{children}</table>
          </div>
        </div>
      </div>
    </CalendarContext.Provider>
  );
};

Calendar.defaultProps = {
  year: 2019,
  month: 8,
};

export default Calendar;
