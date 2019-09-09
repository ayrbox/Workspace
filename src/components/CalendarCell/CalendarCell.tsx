import React, { useContext } from 'react'

import { ShiftType } from '../../constants';
import CalendarContext from '../Calendar/CalendarContext';

interface CalendarCellProps {
 employeeName: string;
 dateKey: string;
 shift: ShiftType; 
}


export const CalendarCell: React.FC<CalendarCellProps> = ({
  employeeName,
  dateKey,
  shift,
}: CalendarCellProps) => {

  const { 
    defaultWorkspace,
  } = useContext(CalendarContext);

  const { label } = defaultWorkspace || {
    label: '-'
  };
  return (
    <td>
      {label}
    </td>
  )
}
