import React, {
  forwardRef,
  useCallback,
  useMemo,
} from 'react'

import { isBezierIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'
import { v4 as uuid } from 'uuid'

import { Typography } from '~/src/foundation'

import { warn } from '~/src/utils/assert'
import {
  isArray,
  isEmpty,
  isNil,
  isNumber,
  isString,
} from '~/src/utils/type'

import {
  Button,
  ButtonColorVariant,
  ButtonSize,
  ButtonStyleVariant,
} from '~/src/components/Button'
import { Divider } from '~/src/components/Divider'
import { Help } from '~/src/components/Help'
import {
  Icon,
  IconSize,
} from '~/src/components/Icon'
import {
  LegacyIcon,
  isIconName,
} from '~/src/components/LegacyIcon'

import { type SectionLabelItemProps } from './SectionLabel.types'
import type SectionLabelProps from './SectionLabel.types'

import Styled from './SectionLabel.styled'

export const SECTION_LABEL_TEST_ID = 'bezier-react-section-label'
export const SECTION_LABEL_TEST_CONTENT_ID = 'bezier-react-section-label-content'
export const SECTION_LABEL_TEST_LEFT_CONTENT_ID = 'bezier-react-section-label-left-content'
export const SECTION_LABEL_TEST_RIGHT_CONTENT_ID = 'bezier-react-section-label-right-content'

function clickableClassName(onClick?: React.MouseEventHandler) {
  return !isNil(onClick) ? 'clickable' : undefined
}

function renderSectionLabelActionItem(props: SectionLabelItemProps, key?: string): React.ReactElement {
  if (!('icon' in props)) {
    return React.cloneElement(props, { key })
  }

  const { icon, iconColor, onClick } = props
  if (isIconName(icon)) {
    warn('Deprecation: IconName as a value for the icon property of SectionLabel has been deprecated. Use the Icon of bezier-icons instead.')
  }

  if (!isNil(iconColor)) {
    /*
     * NOTE: backward compatibility를 위해 iconColor attribute를 지원하지만,
     * iconColor를 사용할 경우 ButtonColorVariant와 일치하지 않기 때문에 Icon을 사용합니다.
     */
    return (
      <Styled.RightItemWrapper
        key={key}
        className={clickableClassName(onClick)}
        onClick={onClick}
      >
        { isBezierIcon(icon) ? (
          <Icon
            source={icon}
            size={IconSize.XS}
            color={iconColor}
          />
        ) : <LegacyIcon name={icon} size={IconSize.XS} color={iconColor} /> }
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

const SectionLabel = forwardRef<HTMLDivElement, SectionLabelProps>(function SectionLabel({
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
}, forwardedRef) {
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

  const renderLeftItem = useCallback((item: SectionLabelItemProps) => {
    if ('icon' in item) {
      if (isBezierIcon(item.icon)) {
        return (
          <Styled.LeftIcon
            className={clickableClassName(item.onClick)}
            source={item.icon}
            size={IconSize.S}
            color={item.iconColor ?? 'txt-black-dark'}
            onClick={item.onClick}
          />
        )
      }

      return (
        <Styled.LegacyLeftIcon
          className={clickableClassName(item.onClick)}
          name={item.icon}
          size={IconSize.S}
          color={item.iconColor ?? 'txt-black-dark'}
          onClick={item.onClick}
        />
      )
    }

    return item
  },
  [])

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
    <Styled.HelpContainer>
      <Help allowHover>
        { help }
      </Help>
    </Styled.HelpContainer>
  ), [help])

  return (
    <div data-testid={SECTION_LABEL_TEST_ID}>
      { divider && <Divider orientation="horizontal" /> }
      <Styled.Wrapper
        ref={forwardedRef}
        className={classNames(
          wrapperClassName,
          clickableClassName(onClick),
        )}
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
})

export default SectionLabel
