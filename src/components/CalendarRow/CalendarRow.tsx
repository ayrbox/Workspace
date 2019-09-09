import React, { useContext, FC } from 'react';

import dateKey from '../../utils/dateKey';
import CalendarCell from '../CalendarCell';
import CalendarContext from '../Calendar/CalendarContext';

export interface CalendarRowProps {
  employeeName: string;  
}

const CalendarRow: FC<CalendarRowProps> = ({
  employeeName,
}: CalendarRowProps) => {
  const {
    days,
    shifts,
  } = useContext(CalendarContext);
  return (
    <tr>
      <td className="calendar__cell calendar__cell--name">{employeeName}</td>
      {days.map(day => {
        const dKey = dateKey(day);
        return shifts.map((shift) => (
          <CalendarCell
            key={`${dKey}-${shift.key}`}
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