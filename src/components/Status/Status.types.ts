export enum StatusType {
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE',
  PRIVATE = 'PRVIATE',
}

export interface StatusProps {
  type: StatusType
}
