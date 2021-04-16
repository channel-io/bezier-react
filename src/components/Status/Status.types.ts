export enum StatusType {
  Online = 'Online',
  Offline = 'Offline',
  Private = 'Private',
}

export interface StatusProps {
  type: StatusType
}
