import React from 'react';
import { ShiftType, WorkspaceType, UNKNOWN_WORKSPACE } from '../../../constants';

type CalendarContextProps = {
  days: Date[];
  shifts: ShiftType[];
  defaultWorkspace: WorkspaceType;
};

export default React.createContext<CalendarContextProps>({
  days: [],
  shifts: [],
  defaultWorkspace: UNKNOWN_WORKSPACE,
});
