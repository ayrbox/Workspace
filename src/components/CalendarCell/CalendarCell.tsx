import React from 'react';

import { ShiftType, WORKSPACES, UNKNOWN_WORKSPACE } from '../../constants';
// import CalendarContext from '../Calendar/CalendarContext';

interface CalendarCellProps {
  employeeName: string;
  dateKey: string;
  shift: ShiftType;
}

export const CalendarCell: React.FC<CalendarCellProps> = ({ employeeName, dateKey, shift }: CalendarCellProps) => {
  /* 
    const { 
      defaultWorkspace,
    } = useContext(CalendarContext);
    const { label } = defaultWorkspace || UNKNOWN_WORKSPACE; 
  */
  const rndSpace = Math.floor(Math.random() * Math.floor(WORKSPACES.length));
  const { label, color } = WORKSPACES[rndSpace] || UNKNOWN_WORKSPACE;
  return <td style={{ backgroundColor: color }}>{label}</td>;
};
