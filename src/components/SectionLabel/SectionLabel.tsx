/* External dependencies */
import React, { useCallback, useMemo } from 'react'
import { isNil, isArray, isEmpty, isString } from 'lodash-es'
import { v4 as uuid } from 'uuid'

/* Internal dependencies */
import { Typography } from '../../foundation'
import { Icon, IconSize } from '../Icon'
import { Tooltip } from '../Tooltip'
import Styled from './SectionLabel.styled'
import SectionLabelProps, { SectionLabelItemProps } from './SectionLabel.types'

function SectionLabel({
  content: givenContent,
  open = true,
  divider = false,
  help,
  left,
  right,
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
          <Styled.ContentText typo={Typography.Size13}>
            { givenContent }
          </Styled.ContentText>
        ) : givenContent }
    </Styled.ContentWrapper>
  ), [
    givenContent,
    contentWrapperClassName,
    contentWrapperInterpolation,
  ])

  const renderLeftItem = useCallback(
    (item: SectionLabelItemProps) => (
      'content' in item
        ? item.content
        : (
          <Styled.LeftIcon
            name={item.icon}
            size={IconSize.S}
            color={item.iconColor ?? 'txt-black-dark'}
            clickable={!isNil(item.onClick)}
            onClick={item.onClick}
          />
        )
    ),
    [],
  )

  const leftContent = useMemo(() => {
    if (isNil(left)) {
      return null
    }

    const item = renderLeftItem(left)
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
    left,
    leftWrapperClassName,
    leftWrapperInterpolation,
    renderLeftItem,
  ])

  const renderRightItem = useCallback(
    (item: SectionLabelItemProps, key?: string) => (
      'content' in item ? React.cloneElement(
        item.content,
        { key },
      ) : (
        <Styled.RightItemWrapper
          key={key}
          clickable={!isNil(item.onClick)}
          onClick={item.onClick}
        >
          <Icon
            name={item.icon}
            size={IconSize.XS}
            color={item.iconColor ?? 'txt-black-dark'}
          />
        </Styled.RightItemWrapper>
      )
    ),
    [],
  )

  const rightContent = useMemo(() => {
    if (isNil(right) || isEmpty(right)) {
      return null
    }

    const items = isArray(right)
      ? right.map((item) => renderRightItem(item, uuid()))
      : renderRightItem(right)

    return (
      <Styled.RightContentWrapper
        className={rightWrapperClassName}
        interpolation={rightWrapperInterpolation}
      >
        { items }
      </Styled.RightContentWrapper>
    )
  }, [
    right,
    rightWrapperClassName,
    rightWrapperInterpolation,
    renderRightItem,
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
        { leftContent }
        { content }
        { helpContent }
        { rightContent }
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
