import React from 'react';

import Calendar from './components/Calendar';
import CalendarRow from './components/CalendarRow';
import CalendarHeader from './components/CalendarHeader';

import { SAMPLE_STAFF } from './constants';

const App: React.FC = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  return (
    <div className="App">
      <header className="App-header">
        <Calendar year={year} month={month}>
          <CalendarHeader />
          <tbody>
            {SAMPLE_STAFF.map(({ code, name }) => (
              <CalendarRow key={code} staffCode={code} employeeName={name} />
            ))}
          </tbody>
        </Calendar>
      </header>
    </div>
  );
};

export default App;
