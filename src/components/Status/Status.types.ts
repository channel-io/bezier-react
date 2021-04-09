export enum StatusType {
  NONE = 'NONE',
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE',
  PRIVATE = 'PRVIATE',
}

export interface StatusProps {
  type: StatusType
}
