import React from 'react';

import Calendar from './components/Calendar';
import CalendarRow from './components/CalendarRow';
import CalendarHeader from './components/CalendarHeader';

import data from './data.json'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Calendar>
          <CalendarHeader />
          <tbody>
          {Object.keys(data).map((empName) => ( 
            <CalendarRow
              key={`row-${empName}`}
              employeeName={empName}
            />
          ))}
          </tbody>
        </Calendar>
      </header>
    </div>
  );
}

export default App;
