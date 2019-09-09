import React from 'react';

import Calendar from './components/Calendar';
import CalendarRow from './components/CalendarRow';
import CalendarHeader from './components/CalendarHeader';

import data from './data.json'

import getMonthDays from './utils/getMonthDays';

const App: React.FC = () => {

  const days = getMonthDays(2019, 8);
  const shifts = ['Morning', 'Afternoon'];

  return (
    <div className="App">
      <header className="App-header">
        <Calendar>
          <CalendarHeader days={days} shifts={shifts} />
          <tbody>
          {Object.keys(data).map((empName) => ( 
            <CalendarRow
              employeeName={empName}
              days={days}
              shifts={shifts}
            />
          ))}
          </tbody>
        </Calendar>
      </header>
    </div>
  );
}

export default App;
