export enum StatusType {
  Online = 'ONLINE',
  Offline = 'OFFLINE',
  Private = 'PRVIATE',
}

export interface StatusProps {
  type: StatusType
}
