import React, { useContext } from 'react';

import { WORKSPACES } from '../../constants';
import CalendarContext from '../Calendar/CalendarContext';

interface CalendarCellProps {
  employeeName: string;
  dateKey: string;
  shift: string;
  workspace: string;
  colSpan: number;
}

export const CalendarCell: React.FC<CalendarCellProps> = ({
  employeeName,
  dateKey,
  shift,
  workspace,
  colSpan,
}: CalendarCellProps) => {
  const { 
    defaultWorkspace,
  } = useContext(CalendarContext);

  const { label, color } = WORKSPACES.find(w => w.key === workspace) || defaultWorkspace;
  return <td style={{ backgroundColor: color }} colSpan={colSpan}>{label}</td>;
};
