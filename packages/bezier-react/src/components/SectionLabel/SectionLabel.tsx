/* External dependencies */
import React, { useCallback, useMemo } from 'react'
import { isNil, isArray, isEmpty, isString, isNumber } from 'lodash-es'
import { v4 as uuid } from 'uuid'

/* Internal dependencies */
import { Typography } from 'Foundation'
import { Button, ButtonColorVariant, ButtonSize, ButtonStyleVariant } from 'Components/Button'
import { Icon, IconSize } from 'Components/Icon'
import { Divider } from 'Components/Divider'
import { Tooltip } from 'Components/Tooltip'
import Styled from './SectionLabel.styled'
import SectionLabelProps, { SectionLabelItemProps } from './SectionLabel.types'

export const SECTION_LABEL_TEST_ID = 'bezier-react-section-label'
export const SECTION_LABEL_TEST_CONTENT_ID = 'bezier-react-section-label-content'
export const SECTION_LABEL_TEST_LEFT_CONTENT_ID = 'bezier-react-section-label-left-content'
export const SECTION_LABEL_TEST_RIGHT_CONTENT_ID = 'bezier-react-section-label-right-content'
export const SECTION_LABEL_TEST_HELP_CONTENT_ID = 'bezier-react-section-label-help-content'

function renderSectionLabelActionItem(props: SectionLabelItemProps, key?: string): React.ReactElement {
  if (!('icon' in props)) {
    return React.cloneElement(props, { key })
  }

  const { icon, iconColor, onClick } = props

  if (!isNil(iconColor)) {
    /*
     * NOTE: backward compatibility를 위해 iconColor attribute를 지원하지만,
     * iconColor를 사용할 경우 ButtonColorVariant와 일치하지 않기 때문에 Icon을 사용합니다.
     */
    return (
      <Styled.RightItemWrapper
        key={key}
        clickable={!isNil(onClick)}
        onClick={onClick}
      >
        <Icon
          name={icon}
          size={IconSize.XS}
          color={iconColor}
        />
      </Styled.RightItemWrapper>
    )
  }

  return (
    <Button
      key={key}
      size={ButtonSize.XS}
      styleVariant={ButtonStyleVariant.Tertiary}
      colorVariant={ButtonColorVariant.Monochrome}
      leftContent={icon}
      onClick={onClick}
    />
  )
}

function SectionLabel({
  content: givenContent,
  open = true,
  divider = false,
  help,
  leftContent,
  rightContent,
  onClick,
  children,
  wrapperClassName,
  wrapperInterpolation,
  contentWrapperClassName,
  contentWrapperInterpolation,
  leftWrapperClassName,
  leftWrapperInterpolation,
  rightWrapperClassName,
  rightWrapperInterpolation,
  ...props
}: SectionLabelProps) {
  const content = useMemo(() => (
    <Styled.ContentWrapper
      className={contentWrapperClassName}
      interpolation={contentWrapperInterpolation}
      data-testid={SECTION_LABEL_TEST_CONTENT_ID}
    >
      { isString(givenContent) || isNumber(givenContent)
        ? (
          <Styled.ContentText bold typo={Typography.Size13}>
            { givenContent }
          </Styled.ContentText>
        ) : givenContent }
    </Styled.ContentWrapper>
  ), [
    givenContent,
    contentWrapperClassName,
    contentWrapperInterpolation,
  ])

  const renderLeftItem = useCallback((item: SectionLabelItemProps) => (
    'icon' in item
      ? (
        <Styled.LeftIcon
          name={item.icon}
          size={IconSize.S}
          color={item.iconColor ?? 'txt-black-dark'}
          clickable={!isNil(item.onClick)}
          onClick={item.onClick}
        />
      ) : item
  ), [])

  const leftComponent = useMemo(() => {
    if (isNil(leftContent)) {
      return null
    }

    const item = renderLeftItem(leftContent)
    const show = !isNil(item)

    return show && (
      <Styled.LeftContentWrapper
        className={leftWrapperClassName}
        interpolation={leftWrapperInterpolation}
        data-testid={SECTION_LABEL_TEST_LEFT_CONTENT_ID}
      >
        { item }
      </Styled.LeftContentWrapper>
    )
  }, [
    leftContent,
    leftWrapperClassName,
    leftWrapperInterpolation,
    renderLeftItem,
  ])

  const rightComponent = useMemo(() => {
    if (isNil(rightContent) || isEmpty(rightContent)) {
      return null
    }

    const items = isArray(rightContent)
      ? rightContent.map((item) => renderSectionLabelActionItem(item, uuid()))
      : renderSectionLabelActionItem(rightContent)

    return (
      <Styled.RightContentWrapper
        className={rightWrapperClassName}
        interpolation={rightWrapperInterpolation}
        data-testid={SECTION_LABEL_TEST_RIGHT_CONTENT_ID}
      >
        { items }
      </Styled.RightContentWrapper>
    )
  }, [
    rightContent,
    rightWrapperClassName,
    rightWrapperInterpolation,
  ])

  const helpContent = useMemo(() => !isNil(help) && (
    <Tooltip
      content={help.tooltipContent}
      allowHover
    >
      <Styled.HelpIconWrapper data-testid={SECTION_LABEL_TEST_HELP_CONTENT_ID}>
        <Icon
          name={help.icon ?? 'help-filled'}
          size={IconSize.XS}
          color={help.iconColor ?? 'txt-black-dark'}
        />
      </Styled.HelpIconWrapper>
    </Tooltip>
  ), [help])

  return (
    <div data-testid={SECTION_LABEL_TEST_ID}>
      { divider && <Divider orientation="horizontal" /> }
      <Styled.Wrapper
        className={wrapperClassName}
        clickable={!isNil(onClick)}
        onClick={onClick}
        interpolation={wrapperInterpolation}
        {...props}
      >
        { leftComponent }
        { content }
        { helpContent }
        { rightComponent }
      </Styled.Wrapper>
      { children && (
        <Styled.ChildrenWrapper show={open}>
          { children }
        </Styled.ChildrenWrapper>
      ) }
    </div>
  )
}

export default SectionLabel
