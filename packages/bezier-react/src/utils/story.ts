import {
  type IconName,
  icons,
} from '@channel.io/bezier-icons'

import { isNaN } from './type'

export const iconList: IconName[] = Object.keys(icons) as IconName[]

interface Enum {
  [id: string]: string | number
}

export const getObjectFromEnum = (input: Enum) => Object.entries(input)
  .reduce((acc, [key, value]) => (
    isNaN(Number(key))
      ? { ...acc, [key]: value }
      : acc
  ), {})
