import React, { FC } from 'react';
import dateKey from '../../utils/dateKey';

import CalendarCell from '../CalendarCell';

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
          <CalendarCell
            key={`${dKey}-${shift}`}
            employeeName={employeeName}
            dateKey={dKey}
            shift={shift}
          />
        ));
      })}
    </tr>
  );
};

export default CalendarRow;