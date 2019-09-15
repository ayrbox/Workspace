import React, { useState, useEffect, useContext, FC } from 'react';
import { style } from 'typestyle';

import CalendarCell from '../CalendarCell';
import CalendarContext from '../Calendar/CalendarContext';

import db from '../../repository';
import { flattenToArray, spanSchedule, blankSchedule } from '../../utils/spanSchedule';
import dateKey from '../../utils/dateKey';
import { fullScheduleType, scheduleType } from '../../types/scheduleType';

export interface CalendarRowProps {
  staffCode: string;
  employeeName: string;
}

const nameCell = style({
  minWidth: '200px',
  position: 'absolute',
  left: '1px',
  backgroundColor: '#fff',
});

const CalendarRow: FC<CalendarRowProps> = ({
  staffCode,
  employeeName,
}: CalendarRowProps) => {
  const { days, shifts } = useContext(CalendarContext);

  const blank_ = blankSchedule(days, shifts);
  const [schedule, setSchedule] = useState(blank_);

  useEffect(() => {
    const start_ = dateKey(days[0]);
    const end_ = dateKey(days[days.length - 1]);

    // TODO: move logic to different file 
    db.ref(`schedules`).orderByKey().startAt(start_).endAt(end_).on('value', (snapshot) => {
      const s = snapshot.val() as fullScheduleType;
      const a = Object.entries(s).reduce<scheduleType>((returnSchedule, [key, values]) => ({
        ...returnSchedule,
        [key]: values[staffCode] // { 20190915: { AM: 'OFFICE', 'PM': 'OFFICE' }}
      }), {});

      setSchedule(a);
    });
  }, [staffCode, days])
  

  const flatSchedule = flattenToArray(schedule);
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
