import React, { FC } from 'react';
import dateKey from '../../utils/dateKey';

export interface CalendarRowProps {
  employeeName: string;  
  days: Date[];
  shifts: string[];
}

const CalendarRow: FC<CalendarRowProps> = ({
  employeeName,
  days,
  shifts,
}: CalendarRowProps) => {
  return (
    <tr>
      <td className="calendar__cell calendar__cell--name">{employeeName}</td>
      {days.map(day => {
        const dKey = dateKey(day);
        return shifts.map((shift) => (
          <td key={`${dKey}-${shift}`}>
            {dKey} - {shift}
          </td>
        ));
      })}
    </tr>
  );
};

export default CalendarRow;