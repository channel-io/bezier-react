import type {
  BezierComponentProps,
  SizeProps,
} from '~/src/types/props'

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

interface EmojiOwnProps {
  name: string
  imageUrl: string
}

export interface EmojiProps extends
  BezierComponentProps<'div'>,
  SizeProps<EmojiSize>,
  EmojiOwnProps {}
