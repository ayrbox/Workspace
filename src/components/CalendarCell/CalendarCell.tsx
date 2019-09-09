import React from 'react'
// import find from 'lodash/find';

import { workSpaceLocation } from '../../constants';

interface CalendarCellProps {
 employeeName: string;
 dateKey: string;
 shift: string; 
}

const defaultShift = Object.entries(workSpaceLocation)
  .map(([key, value]) => ({ key, ...value}))
  .find(({ isDefault }) => isDefault);

export const CalendarCell: React.FC<CalendarCellProps> = ({
  employeeName,
  dateKey,
  shift,
}: CalendarCellProps) => {
  const { label } = defaultShift || {
    label: '-'
  };
  return (
    <td>
      {label}
    </td>
  )
}
