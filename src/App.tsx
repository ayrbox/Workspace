import React from 'react';

import Calendar from './components/Calendar';
import CalendarRow from './components/CalendarRow';
import CalendarHeader from './components/CalendarHeader';

import data from './data.json'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Calendar year={2020} month={10}>
          <CalendarHeader />
          <tbody>
            <CalendarRow employeeName="Ayrbox" />
            <CalendarRow employeeName="Beans" />
            <CalendarRow employeeName="Sabin" />
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
