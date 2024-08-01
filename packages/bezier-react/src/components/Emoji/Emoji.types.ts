import type { BezierComponentProps, SizeProps } from '~/src/types/props'

export type EmojiSize =
  | '16'
  | '20'
  | '24'
  | '30'
  | '36'
  | '42'
  | '48'
  | '60'
  | '72'
  | '90'
  | '120'

interface EmojiOwnProps {
  /**
   * Name of the emoji. e.g. 'grinning', 'smiley', etc.
   */
  name: string
  /**
   * @deprecated
   * `imageUrl` is created in the component and will be removed in the next major version.
   */
  imageUrl?: string
}

export interface EmojiProps
  extends BezierComponentProps<'div'>,
    SizeProps<EmojiSize>,
    EmojiOwnProps {}
