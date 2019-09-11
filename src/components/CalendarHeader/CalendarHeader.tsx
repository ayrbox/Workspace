import React, { FC, useContext } from 'react';
import { style } from 'typestyle';

import dateKey from '../../utils/dateKey';
import dayName from '../../utils/dayName';
import CalendarContext from '../Calendar/CalendarContext';

export interface CalendarHeaderProps {
  label?: string;
}

const shiftHeaderCell = style({
  fontSize: '.75rem',
  textAlign: 'center',
  transform: 'rotate(315deg)',
});

const nameHeaderCell = style({
  minWidth: '200px',
  position: 'absolute',
  left: '0',
  backgroundColor: '#fff',
  // border: '1px solid #fff !important',
});


const CalendarHeader: FC<CalendarHeaderProps> = ({ label }: CalendarHeaderProps) => {
  const { days, shifts } = useContext(CalendarContext);

  return (
    <thead>
      <tr>
        <td className={nameHeaderCell}>{label}</td>
        {days.map(day => {
          const key = dateKey(day);
          return (
            <td key={key} colSpan={2} className="text-center">
              {dayName(day)}
            </td>
          );
        })}
      </tr>
      <tr>
        <td className={nameHeaderCell}>{' - '}</td>
        {days.map(day => {
          const key = dateKey(day);
          return shifts.map(shift => (
            <td key={`${key}-${shift.key}`} className={shiftHeaderCell}>
              {shift.label}
            </td>
          ));
        })}
      </tr>
    </thead>
  );
};

CalendarHeader.defaultProps = {
  label: 'Name',
};

export default CalendarHeader;
