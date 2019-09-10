import React, { useContext, FC } from 'react';

import CalendarCell from '../CalendarCell';
import CalendarContext from '../Calendar/CalendarContext';

import dateKey from '../../utils/dateKey';
import spanSchedule, { generateRandomSchedule } from '../../utils/spanSchedule';

export interface CalendarRowProps {
  employeeName: string;
}

const CalendarRow: FC<CalendarRowProps> = ({ employeeName }: CalendarRowProps) => {
  const { days, shifts } = useContext(CalendarContext);

  const a = generateRandomSchedule(days, shifts);
  const b = spanSchedule(a);
  // console.log('Span', b);

  return (
    <>
      <tr>
        <td className="calendar__cell calendar__cell--name">{employeeName}</td>
        {b.map(d => (
          <td key={`${d.dayKey}-${d.shift}`}>{d.workspace}</td>
        ))}
      </tr>
      <tr>
        <td className="calendar__cell calendar__cell--name">{employeeName}</td>
        {days.map(day => {
          const dKey = dateKey(day);
          return shifts.map(shift => (
            <CalendarCell key={`${dKey}-${shift.key}`} employeeName={employeeName} dateKey={dKey} shift={shift} />
          ));
        })}
      </tr>
    </>
  );
};

export default CalendarRow;
