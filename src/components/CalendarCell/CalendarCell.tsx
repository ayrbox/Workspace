import React, { useContext } from 'react';
import { style } from 'typestyle';
import { color } from 'csx';

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
  const { defaultWorkspace } = useContext(CalendarContext);
  const { label, color: backColor } = WORKSPACES.find(w => w.key === workspace) || defaultWorkspace;

  const tdStyle = style({
    padding: '0 !important', // todo: remove important
  });

  const bgColor = color(backColor);

  const spaceStyle = style({
    backgroundColor: bgColor.toHexString(),
    display: 'block',
    padding: '.75rem',
    borderLeft: `5px solid ${bgColor.darken('20%').toHexString()}`,
  });

  return (
    <td className={tdStyle} colSpan={colSpan}>
      <span className={spaceStyle}>{label}</span>
    </td>
  );
};
