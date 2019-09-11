import React, { useContext, FC } from 'react';
import { style } from 'typestyle';

import CalendarCell from '../CalendarCell';
import CalendarContext from '../Calendar/CalendarContext';

import { generateRandomSchedule, flattenToArray, spanSchedule } from '../../utils/spanSchedule';

export interface CalendarRowProps {
  employeeName: string;
}

const nameCell = style({
  minWidth: '200px',
});

const CalendarRow: FC<CalendarRowProps> = ({ employeeName }: CalendarRowProps) => {
  const { days, shifts } = useContext(CalendarContext);

  const randomSchedule = generateRandomSchedule(days, shifts);
  const flatSchedule = flattenToArray(randomSchedule);
  const spannedSchedule = spanSchedule(flatSchedule);

  return (
    <>
      <tr>
        <td className={nameCell}>{employeeName}</td>
        {spannedSchedule.map(d => (
          <CalendarCell
            key={`${d.dayKey}-${d.shift}`}
            employeeName={employeeName}
            dateKey={d.dayKey}
            shift={d.shift}
            workspace={d.workspace}
            colSpan={d.span}
          />
        ))}
      </tr>
    </>
  );
};

export default CalendarRow;
