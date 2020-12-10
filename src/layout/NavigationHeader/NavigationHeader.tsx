/* External dependencies */
import React, { forwardRef, useCallback } from 'react'
import Text from '../../components/Text/Text.styled'
import Typography from '../../styling/Typography'

/* Internal dependencies */
import { ActionWrapper, Container, TitleWrapper } from './NavigationHeader.styled'
import NavigationHeaderProps from './NavigationHeader.types'

export const NAV_HEADER_TEST_ID = 'ch-design-system-nav-header'

function NavigationHeader(
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
  }: NavigationHeaderProps,
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

  const renderActions = useCallback((elements) => (
    <ActionWrapper>
      { elements }
    </ActionWrapper>
  ), [])

  return (
    <Container
      ref={forwardedRef}
      data-testid={testId}
      className={className}
      style={style}
      isHover={isHover}
    >
      { renderTitle(title) }
      { actions && renderActions(actions) }
    </Container>
  )
}

export default forwardRef(NavigationHeader)
