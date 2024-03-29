import React, { useState, useEffect, useContext, FC } from 'react';
import { style } from 'typestyle';
import merge_ from 'lodash/merge';

import CalendarCell from '../CalendarCell';
import CalendarContext from '../Calendar/CalendarContext';

import { database } from '../../repository';
import { flattenToArray, spanSchedule, blankSchedule } from '../../utils/spanSchedule';
import dateKey from '../../utils/dateKey';
import { fullScheduleType, scheduleType } from '../../types/scheduleType';

export interface CalendarRowProps {
  staffCode: string;
  employeeName: string;
  merge?: boolean;
}

const nameCell = style({
  minWidth: '200px',
  position: 'absolute',
  left: '1px',
  backgroundColor: '#fff',
});

const CalendarRow: FC<CalendarRowProps> = ({ staffCode, employeeName, merge }: CalendarRowProps) => {
  const { days, shifts } = useContext(CalendarContext);

  const emptySchedule = blankSchedule(days, shifts);
  const [schedule, setSchedule] = useState(emptySchedule);

  useEffect(() => {
    const calStartDate = dateKey(days[0]);
    const calEndDate = dateKey(days[days.length - 1]);

    const defaultSchedule = blankSchedule(days, shifts);

    database
      .ref('schedules')
      .orderByKey()
      .startAt(calStartDate)
      .endAt(calEndDate)
      .on('value', snapshot => {
        const s = snapshot.val() as fullScheduleType;
        if (s) {
          const a = Object.entries(s).reduce<scheduleType>(
            (returnSchedule, [key, values]) => ({
              ...returnSchedule,
              [key]: values[staffCode], // { 20190915: { AM: 'OFFICE', 'PM': 'OFFICE' }}
            }),
            {},
          );

          setSchedule(merge_({}, defaultSchedule, a));
        } else {
          setSchedule(defaultSchedule);
        }
      });
  }, [staffCode, days, shifts]);

  let flatSchedule = flattenToArray(schedule);
  if (merge) {
    flatSchedule = spanSchedule(flatSchedule);
  }

  return (
    <>
      <tr>
        <td className={nameCell}>{employeeName}</td>
        {flatSchedule.map(d => 
          <CalendarCell
            key={`${d.dayKey}-${d.shift}`}
            employeeCode={staffCode}
            dateKey={d.dayKey}
            shift={d.shift}
            workspace={d.workspace}
            colSpan={d.span}
            />
        )}
      </tr>
    </>
  );
};

CalendarRow.defaultProps = {
  merge: true,
};

export default CalendarRow;
