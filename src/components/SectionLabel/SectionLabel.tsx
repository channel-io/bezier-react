/* External dependencies */
import React, { useCallback, useMemo } from 'react'
import { isNil, isArray, isEmpty, isString } from 'lodash-es'
import { v4 as uuid } from 'uuid'

/* Internal dependencies */
import { Typography } from '../../foundation'
import { Button, ButtonColorVariant, ButtonSize, ButtonStyleVariant } from '../Button'
import { Icon, IconSize } from '../Icon'
import { Tooltip } from '../Tooltip'
import Styled from './SectionLabel.styled'
import SectionLabelProps, { SectionLabelItemProps } from './SectionLabel.types'

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
          color={iconColor ?? 'txt-black-dark'}
        />
      </Styled.RightItemWrapper>
    )
  }

  return (
    <Button
      size={ButtonSize.XS}
      styleVariant={ButtonStyleVariant.Tertiary}
      colorVariant={ButtonColorVariant.Monochrome}
      leftComponent={icon}
      // FIXME: Button의 onClick event 타입이 React.MouseEvent가 아니라 MouseEvent로 되어 있어 ts-ignore 함.
      // 올바르게 변경 이후 ts-ignore 삭제.
      // @ts-ignore
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
    >
      { isString(givenContent)
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
    <Tooltip content={help.tooltipContent}>
      <Styled.HelpIconWrapper>
        <Icon
          name={help.icon ?? 'help-filled'}
          size={IconSize.XS}
          color={help.iconColor ?? 'txt-black-dark'}
        />
      </Styled.HelpIconWrapper>
    </Tooltip>
  ), [help])

  return (
    <div>
      { divider && <Styled.Divider /> }
      <Styled.Wrapper
        className={wrapperClassName}
        clickable={!isNil(onClick)}
        onClick={onClick}
        interpolation={wrapperInterpolation}
        // eslint-disable-next-line react/jsx-props-no-spreading
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
