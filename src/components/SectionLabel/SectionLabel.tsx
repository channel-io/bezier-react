/* External dependencies */
import React, { useCallback, useMemo } from 'react'
import _ from 'lodash-es'
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
  contentWrapperClassName,
  leftWrapperClassName,
  rightWrapperClassName,
}: SectionLabelProps) {
  const content = useMemo(() => (
    <Styled.ContentWrapper className={contentWrapperClassName}>
      { _.isString(givenContent)
        ? (
          <Styled.ContentText bold typo={Typography.Size13}>
            { givenContent }
          </Styled.ContentText>
        ) : givenContent }
    </Styled.ContentWrapper>
  ), [
    givenContent,
    contentWrapperClassName,
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
            clickable={!_.isNil(item.onClick)}
            onClick={item.onClick}
          />
        )
    ),
    [],
  )

  const leftContent = useMemo(() => {
    if (_.isNil(left)) {
      return null
    }

    const item = renderLeftItem(left)
    const show = !_.isNil(item)

    return show && (
      <Styled.LeftContentWrapper className={leftWrapperClassName}>
        { item }
      </Styled.LeftContentWrapper>
    )
  }, [
    left,
    leftWrapperClassName,
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
          clickable={!_.isNil(item.onClick)}
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
    if (_.isNil(right)) {
      return null
    }

    const items = _.isArray(right)
      ? right.map((item) => renderRightItem(item, uuid()))
      : renderRightItem(right)

    const show = !_.isEmpty(items)

    return show && (
      <Styled.RightContentWrapper className={rightWrapperClassName}>
        { items }
      </Styled.RightContentWrapper>
    )
  }, [
    right,
    rightWrapperClassName,
    renderRightItem,
  ])

  const helpContent = useMemo(() => !_.isNil(help) && (
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
        clickable={!_.isNil(onClick)}
        onClick={onClick}
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
