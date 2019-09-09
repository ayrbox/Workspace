import React from 'react';
import { ShiftType, WorkSpaceLocationType } from '../../constants';

type CalendarContextProps = {
  days: Date[],
  shifts: ShiftType[], 
  defaultWorkspace: WorkSpaceLocationType,
}

export default React.createContext<CalendarContextProps>({
  days: [],
  shifts: [],
  defaultWorkspace: {} 
}); 