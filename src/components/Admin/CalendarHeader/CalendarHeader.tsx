import React, { FC, useContext } from 'react';
import dateKey from '../../../utils/dateKey';
import { dayName } from '../../../utils/dayName';

import CalendarContext from '../Calendar/CalendarContext';

export interface CalendarHeaderProps {
  label?: string;
}

const CalendarHeader: FC<CalendarHeaderProps> = ({ label }: CalendarHeaderProps) => {
  const { days, shifts } = useContext(CalendarContext);

  return (
    <thead>
      <tr>
        <td rowSpan={2}>{label}</td>
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
          return shifts.map(shift => (
            <td key={`${key}-${shift.key}`} className="text-center">
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
