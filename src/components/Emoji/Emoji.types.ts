/* Internal dependencies */
import type { BezierComponentProps, SizeProps } from 'Types/ComponentProps'

export enum EmojiSize {
  Size16 = 16,
  Size20 = 20,
  Size24 = 24,
  Size30 = 30,
  Size42 = 42,
  Size90 = 90,
  Size120 = 120,
}

interface EmojiOptions {
  imageUrl: string
  onClick?: React.MouseEventHandler
}

export default interface EmojiProps extends
  BezierComponentProps,
  SizeProps<EmojiSize>,
  EmojiOptions {}
