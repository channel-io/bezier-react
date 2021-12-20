export enum StatusType {
  Online = 'Online',
  Offline = 'Offline',
  Lock = 'Lock',
}

export enum StatusSize {
  M = 8,
  L = 14,
}

export interface StatusProps {
  type: StatusType
  size: StatusSize
}
