export interface WorkSpaceLocationType {
  [key: string]: {
    label: string;
    description?: string;
    state?: 0 | 1;  // working state
    isDefault?: boolean;
  };
}

export interface ShiftType {
  key: string;
  label: string;
  description?: string;
}

export const workSpaceLocation: WorkSpaceLocationType = {
  'HOME': {
    label: 'Home',
    description: 'Working from Home',
    state: 1,
  },
  'OFFICE': {
    label: 'Office',
    description: 'Working in office',
    state: 1,
    isDefault: true,
  },
  'OFF': {
    label: 'Day Off',
    description: 'Day off of work/ OnLeave',
  }
} 

export const shifts: ShiftType[] = [{
  key: 'AM',
  label: 'Morning',
  description: 'Morning Shift 09:00 - 12:30',
}, {
  key: 'PM',
  label: 'Afternoon',
  description: 'Afternoon shift 14:00 - 18:00',
}];

