export interface ShiftType {
  key: string;
  label: string;
  description?: string;
}

export interface WorkspaceType {
  key: string;
  label: string;
  description?: string;
  state: 0 | 1; // working state
  isDefault?: boolean;
  color: string;
}

export const WORKSPACES: WorkspaceType[] = [
  {
    key: 'HOME',
    label: 'Home',
    description: 'Working from Home',
    state: 1,
    color: '#c8f5c8',
  },
  {
    key: 'OFFICE',
    label: '',
    description: 'Working in Office',
    state: 1,
    isDefault: true,
    color: '#fefefe',
  },
  {
    key: 'OFF',
    label: '',
    description: 'Day off of work / On Leave',
    state: 0,
    color: '#ffdead',
  },
  {
    key: 'NONWORKINGDAY',
    label: '',
    description: 'Non working day / Weekends / Bank holiday',
    state: 0,
    color: '#f7f2cd',
  },
];

export const UNKNOWN_WORKSPACE: WorkspaceType = {
  key: 'UNKNOWN',
  label: 'Not known',
  description: 'Not known / Undefined / Null',
  state: 0,
  color: '#ddd',
};

export const SHIFTS: ShiftType[] = [
  {
    key: 'AM',
    label: 'Morning',
    description: 'Morning Shift 09:00 - 12:30',
  },
  {
    key: 'PM',
    label: 'Afternoon',
    description: 'Afternoon shift 14:00 - 18:00',
  },
];

export const UNKNOWN_SHIFT: ShiftType = {
  key: 'UNKNOWN',
  label: 'Unknown Shift',
};
