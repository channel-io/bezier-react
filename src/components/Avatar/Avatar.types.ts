export enum AvatarSize {
  XXS = 20,
  XS = 24,
  S = 30,
  M = 36,
  L = 42,
  XL = 48,
  XXL = 90,
  XXXL = 120,
}

// TODO: Emoji가 Avatar로 사용돼야하는지, Icon으로 사용돼야하는지?

export enum EmojiAvatarSize {
  XXS = 16,
  XS = 20,
  S = 24,
  M = 30,
  L = 36,
  XL = 42,
  XXL = 90,
  XXXL = 120,
}

export default interface AvatarProps {
  src: string
  alt?: string
  testId: string
  size: AvatarSize
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void
  onMouseEnter: (event: React.MouseEvent<HTMLDivElement>) => void
  onMouseLeave: (event: React.MouseEvent<HTMLDivElement>) => void
}
