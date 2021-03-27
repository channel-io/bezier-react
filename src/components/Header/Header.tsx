/* External dependencies */
import React, { forwardRef, useMemo } from 'react'

/* Internal dependencies */
import { Typography } from '../../foundation'
import { Text } from '../Text'
import { ActionWrapper, Container, ImageWrapper, TitleImage, TitleWrapper } from './Header.styled'
import HeaderProps from './Header.types'

export const NAV_HEADER_TEST_ID = 'ch-design-system-nav-header'

function Header(
  {
    testId,
    style,
    className,
    title,
    titleClassName,
    titleSize = Typography.Size18,
    titleImageUrl,
    titleImageSize = 42,
    actions,
    onClickTitle,
    /* Navigation cloneElement Props */
    isHover,
  }: HeaderProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const titleComponent = useMemo(() => (
    <TitleWrapper className={titleClassName}>
      { titleImageUrl && (
        <ImageWrapper>
          <TitleImage imageUrl={titleImageUrl} imageSize={titleImageSize} />
        </ImageWrapper>
      ) }
      <Text
        typo={titleSize}
        bold
        onClick={onClickTitle}
      >
        { title }
      </Text>
    </TitleWrapper>
  ), [
    onClickTitle,
    title,
    titleClassName,
    titleImageSize,
    titleImageUrl,
    titleSize,
  ])

  const actionsComponent = useMemo(() => (
    actions && (
      <ActionWrapper>
        { actions }
      </ActionWrapper>
    )
  ), [actions])

  return (
    <Container
      ref={forwardedRef}
      data-testid={testId}
      className={className}
      style={style}
      isHover={isHover}
    >
      { titleComponent }
      { actionsComponent }
    </Container>
  )
}

export default forwardRef(Header)
