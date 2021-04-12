/* External dependencies */
import React, { useCallback, useMemo } from 'react'
import _ from 'lodash-es'

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
}: SectionLabelProps) {
  const content = useMemo(() => (
    <Styled.ContentWrapper>
      { _.isString(givenContent)
        ? (
          <Styled.ContentText bold typo={Typography.Size13}>
            { givenContent }
          </Styled.ContentText>
        ) : givenContent }
    </Styled.ContentWrapper>
  ), [givenContent])

  const renderLeftItem = useCallback(
    (item: SectionLabelItemProps) => (
      'content' in item
        ? item.content
        : (
          <Icon
            name={item.icon}
            size={IconSize.S}
            color={item.iconColor ?? 'txt-black-dark'}
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
      <Styled.LeftContentWrapper>
        { item }
      </Styled.LeftContentWrapper>
    )
  }, [
    left,
    renderLeftItem,
  ])

  const renderRightItem = useCallback(
    (item: SectionLabelItemProps, index: number) => (
      <Styled.RightItemWrapper key={index}>
        { 'content' in item
          ? item.content
          : (
            <Icon
              name={item.icon}
              size={IconSize.XS}
              color={item.iconColor ?? 'txt-black-dark'}
            />
          ) }
      </Styled.RightItemWrapper>
    ),
    [],
  )

  const rightContent = useMemo(() => {
    if (_.isNil(right)) {
      return null
    }

    const items = _.compact(
      _.isArray(right)
        ? right.map(renderRightItem)
        : [right].map(renderRightItem),
    )
    const show = !_.isEmpty(items)

    return show && (
      <Styled.RightContentWrapper>
        { items }
      </Styled.RightContentWrapper>
    )
  }, [
    right,
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
