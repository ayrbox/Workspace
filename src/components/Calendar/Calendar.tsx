import React, { ReactElement, FC } from 'react'

interface CalendarProps {
  children: ReactElement | ReactElement[];
}

export const Calendar: FC<CalendarProps> = ({
  children
}: CalendarProps) => {
  return (
    <div className="calendar-container" style={{ overflow: 'scroll', width: '100%' }}>
      <table className="table table-dark table-striped table-bordered">
        {children} 
      </table>
    </div>
  )
}

export default Calendar;
