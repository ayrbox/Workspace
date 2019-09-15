import React, { useContext, ReactElement, FC } from 'react';
import moment from 'moment';
import { style } from 'typestyle';

import CalendarContext, { NavigationDirection } from '../Calendar/CalendarContext';

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

const Header: FC<HeaderProps> = ({
  year,
  monthIndex,
}: HeaderProps) => {

  const { onNavigate } = useContext(CalendarContext);

  return (
    <div className={calendarHeader}>
      <button
        type="button"
        onClick={() => onNavigate(NavigationDirection.PREVIOUS)}
      >
        &lt;
      </button>
      <h4>
        {`
          ${moment(monthIndex + 1, 'MM').format('MMMM')}
          ${year} 
        `}
      </h4>
      <button
        type="button"
        onClick={() => onNavigate(NavigationDirection.NEXT)}
      >
        &gt; 
      </button>
    </div>
  );
};

export default Header;
