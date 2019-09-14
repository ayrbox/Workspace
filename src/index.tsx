import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import getMonthDays from './utils/getMonthDays';
import { generateRandomSchedule } from './utils/spanSchedule';
import { SAMPLE_STAFF, SHIFTS, UNKNOWN_WORKSPACE } from './constants';
import db from './repository';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Generate Random Data for while Year
// console.log('Generating...')
// for (let month = 0; month <= 11; month++) {
//   const days = getMonthDays(2019, month);
//   SAMPLE_STAFF.forEach(({ code: staffCode })=> {
//     const r = generateRandomSchedule(days, SHIFTS);
//     Object.entries(r).map(([key, value]) => {
//       db.ref(`schedules/${key}/${staffCode}`).set(value);
//     });
//   });
// }

// console.log('Random rota completed please check firebase.');

// Read data with specific dates
// db.ref(`schedules`).orderByKey().startAt('20190909').endAt('20190915').once('value', (snapshot) => {
//   const a = snapshot.val();
//   console.log('Hello >>>>>>>>>>>>>>', a);
// });
