export interface WorkSpaceLocationType {
  [key: string]: {
    label: string;
    description?: string;
    state?: 0 | 1;  // working state
    isDefault?: boolean;
  };
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