/* External dependencies */
import React, { forwardRef, useCallback, useMemo } from 'react'

/* Internal dependencies */
import Typography from '../../styling/Typography'
import { Text } from '../Text'
import { ActionWrapper, Container, TitleWrapper } from './Header.styled'
import HeaderProps from './Header.types'

export const NAV_HEADER_TEST_ID = 'ch-design-system-nav-header'

function Header(
  {
    testId,
    style,
    className,
    title, // Text or Text With Image
    titleClassName,
    actions,
    onClickTitle,
    /* Navigation cloneElement Props */
    isHover,
  }: HeaderProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const renderTitle = useCallback(element => {
    if (typeof element === 'string') {
      return (
        <TitleWrapper className={titleClassName}>
          <Text
            typo={Typography.Size24}
            bold
            onClick={onClickTitle}
          >
            { element }
          </Text>
        </TitleWrapper>
      )
    }
    return (
      <TitleWrapper onClick={onClickTitle}>
        { element }
      </TitleWrapper>
    )
  }, [titleClassName, onClickTitle])

  const actionComponents = useMemo(() => (
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
      { renderTitle(title) }
      { actionComponents }
    </Container>
  )
}

export default forwardRef(Header)
