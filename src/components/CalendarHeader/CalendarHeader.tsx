import React, { FC } from 'react';
import dateKey from '../../utils/dateKey';
import dayName from '../../utils/dayName';

export interface CalendarHeaderProps {
  label?: string,
  days: Date[] ,
  shifts: string[],
}

const CalendarHeader: FC<CalendarHeaderProps> = ({
  label,
  days,
  shifts,
}: CalendarHeaderProps ) => (
  <thead>
    <tr>
      <td rowSpan={2}>
        {label} 
      </td>
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
      {days.map(day => {
        const key = dateKey(day);
        return shifts.map(shift => <td key={`${key}-${shift}`} className="text-center">{shift}</td>)
      })}
    </tr>
  </thead>
);

CalendarHeader.defaultProps = {
  label: 'Name',
};

export default CalendarHeader;