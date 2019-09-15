export type shiftScheduleType = {
  [key: string]: string;
};

export type scheduleType = {
  [key: string]: shiftScheduleType;
};

export type staffScheduleType = {
  [key: string]: shiftScheduleType;
}

export type fullScheduleType = {
  [key: string]: staffScheduleType;
}