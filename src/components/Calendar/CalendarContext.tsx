import React from 'react';
import { ShiftType, WorkspaceType, UNKNOWN_WORKSPACE } from '../../constants';

export enum NavigationDirection {
  PREVIOUS = -1,
  NEXT = 1, 
};

type CalendarContextProps = {
  days: Date[];
  shifts: ShiftType[];
  defaultWorkspace: WorkspaceType;
  onNavigate: (direction: NavigationDirection) => void;
};

export default React.createContext<CalendarContextProps>({
  days: [],
  shifts: [],
  defaultWorkspace: UNKNOWN_WORKSPACE,
  onNavigate: () => undefined,
});
