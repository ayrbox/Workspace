import React from 'react';

import Calendar from './components/Calendar';
import CalendarRow from './components/CalendarRow';
import CalendarHeader from './components/CalendarHeader';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Calendar year={2020} month={10}>
          <CalendarHeader />
          <tbody>
            <CalendarRow employeeName="Ayrbox" />
            <CalendarRow employeeName="Beans" />
            <CalendarRow employeeName="Employee 1" />
            <CalendarRow employeeName="Employee 2" />
            <CalendarRow employeeName="Employee 3" />
            <CalendarRow employeeName="Employee 4" />
            <CalendarRow employeeName="Employee 5" />
            <CalendarRow employeeName="Employee 6" />
            <CalendarRow employeeName="Employee 7" />
            <CalendarRow employeeName="Employee 8" />
            <CalendarRow employeeName="Employee 9" />
            <CalendarRow employeeName="Employee 10" />
          </tbody>
        </Calendar>
      </header>
    </div>
  );
}

export default App;
