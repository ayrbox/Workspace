import React, { useContext } from 'react';
import { style } from 'typestyle';
import { color, px } from 'csx';
import clsx from 'clsx';

import { WORKSPACES } from '../../constants';
import CalendarContext from '../Calendar/CalendarContext';

interface CalendarCellProps {
  employeeName: string;
  dateKey: string;
  shift: string;
  workspace: string;
  colSpan: number;
}

const strippedOff = style({
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f9f9fa' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
});

export const CalendarCell: React.FC<CalendarCellProps> = ({
  employeeName,
  dateKey,
  shift,
  workspace,
  colSpan,
}: CalendarCellProps) => {
  const { defaultWorkspace } = useContext(CalendarContext);
  const { label, color: backColor, state, description } = WORKSPACES.find(w => w.key === workspace) || defaultWorkspace;

  const tdStyle = style({
    padding: '0 !important', // todo: remove important
  });

  const bgColor = color(backColor);

  const spaceStyle = style({
    backgroundColor: bgColor.toHexString(),
    display: 'block',
    padding: '.75rem',
    borderLeft: `5px solid ${bgColor.darken('20%').toHexString()}`,
    minHeight: px(43),
  });

  const textClass = clsx(spaceStyle, state === 0 && strippedOff);

  return (
    <td className={tdStyle} colSpan={colSpan}>
      <span className={textClass} title={description}>{label}</span>
    </td>
  );
};
