/* Internal dependencies */
import type {
  BezierComponentProps,
  ChildrenProps,
  SizeProps,
} from 'Types/ComponentProps'
import { StatusType } from 'Components/Status'

export enum EmojiAvatarSize {
  Size16 = 16,
  Size20 = 20,
  Size24 = 24,
  Size30 = 30,
  Size42 = 42,
  Size90 = 90,
  Size120 = 120,
}

interface EmojiAvatarOptions {
  emojiUrl: string
  status?: StatusType
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

export default interface EmojiAvatarProps extends
  BezierComponentProps,
  ChildrenProps,
  SizeProps<EmojiAvatarSize>,
  EmojiAvatarOptions {}
