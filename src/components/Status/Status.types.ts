export enum StatusType {
  Online = 'Online',
  Offline = 'Offline',
  Lock = 'Lock',
}

export interface StatusProps {
  type: StatusType
}
