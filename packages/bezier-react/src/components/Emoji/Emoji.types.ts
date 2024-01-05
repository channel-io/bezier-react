import type {
  AlphaBezierComponentProps,
  MarginProps,
  SizeProps,
} from '~/src/types/ComponentProps'

export enum EmojiSize {
  Size16 = 16,
  Size20 = 20,
  Size24 = 24,
  Size30 = 30,
  Size36 = 36,
  Size42 = 42,
  Size48 = 48,
  Size60 = 60,
  Size72 = 72,
  Size90 = 90,
  Size120 = 120,
}

interface EmojiOptions {
  name: string
  imageUrl: string
  onClick?: React.MouseEventHandler
}

export interface EmojiProps extends
  AlphaBezierComponentProps,
  SizeProps<EmojiSize>,
  MarginProps,
  EmojiOptions {}
