import React, { Component } from 'react'

import { WeekdayNames } from '../../constants';

class WeekDays extends Component<{}> {
  render() {
    return WeekdayNames.map((dayName: string) => (
      <span className="day-name">{dayName}</span>
    ));
  }
};

export default WeekDays;