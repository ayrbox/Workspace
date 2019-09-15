import React, { useContext, ReactElement, FC } from 'react';
import moment from 'moment';
import { style } from 'typestyle';

import CalendarContext, { NavigationDirection } from '../Calendar/CalendarContext';
import { Previous, Next } from '../NavigationButtons';

export interface HeaderProps {
  year: number;
  monthIndex: number;
}

const calendarHeader = style({
  width: '100%',
  textAlign: 'center',
  paddingBottom: '32px',
  borderBottom: '1px solid #ddd',
  marginBottom: '32px',
  display: 'flex',
  justifyContent: 'space-between',
  alignContent: 'center',
});

const Header: FC<HeaderProps> = ({ year, monthIndex }: HeaderProps): ReactElement => {
  const { onNavigate } = useContext(CalendarContext);

  return (
    <div className={calendarHeader}>
      <Previous onClick={(): void => onNavigate(NavigationDirection.PREVIOUS)} />
      <h4>
        {`
          ${moment(monthIndex + 1, 'MM').format('MMMM')}
          ${year} 
        `}
      </h4>
      <Next onClick={(): void => onNavigate(NavigationDirection.NEXT)} />
    </div>
  );
};

export default Header;
