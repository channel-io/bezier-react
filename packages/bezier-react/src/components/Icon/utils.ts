/* Internal Dependencies */
import { } from '@bezier-react/icons'
import icons, { IconName } from './generated'

export const isIconName = (name): name is IconName => Object.keys(icons).includes(name)
