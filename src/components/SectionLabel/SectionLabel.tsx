/* External dependencies */
import React, { useMemo } from 'react'
import _ from 'lodash-es'

/* Internal dependencies */
import { Typography } from '../../foundation'
import { Icon, IconName, IconSize } from '../Icon'
import Styled from './SectionLabel.styled'
import SectionLabelProps from './SectionLabel.types'

function SectionLabel({
  content: givenContent,
  open = true,
  leftIcon,
  leftIconColor,
  leftContent: givenLeftContent,
  rightIcon,
  rightIconColor,
  rightContent: givenRightContent,
  leftPadding = 6,
  contentLeftPadding = 6,
  onClick,
  onClickRightContent,
  children,
}: SectionLabelProps) {
  const leftIconContent = useMemo(() => leftIcon && (
    <Icon
      name={leftIcon}
      size={IconSize.S}
      color={leftIconColor ?? 'txt-black-darker'}
    />
  ), [
    leftIcon,
    leftIconColor,
  ])

  const leftContent = useMemo(() => {
    const show = !_.isNil(givenLeftContent ?? leftIconContent)
    return show && (
      <Styled.LeftContentWrapper paddingLeft={leftPadding}>
        { givenLeftContent ?? leftIconContent }
      </Styled.LeftContentWrapper>
    )
  }, [
    givenLeftContent,
    leftIconContent,
    leftPadding,
  ])

  const content = useMemo(() => (
    <Styled.ContentWrapper paddingLeft={contentLeftPadding}>
      { _.isString(givenContent)
        ? (
          <Styled.ContentText bold typo={Typography.Size13}>
            { givenContent }
          </Styled.ContentText>
        ) : givenContent }
    </Styled.ContentWrapper>
  ), [
    givenContent,
    contentLeftPadding,
  ])

  const defaultRightIcon: IconName = open ? 'chevron-up' : 'chevron-down'
  const rightIconContent = useMemo(() => (
    <Icon
      name={rightIcon ?? defaultRightIcon}
      size={IconSize.XS}
      color={rightIconColor ?? 'txt-black-darker'}
    />
  ), [
    rightIcon,
    defaultRightIcon,
    rightIconColor,
  ])

  const rightContent = useMemo(() => (
    <Styled.RightContentWrapper
      clickable={!_.isNil(onClickRightContent)}
      onClick={onClickRightContent}
    >
      { givenRightContent ?? rightIconContent }
    </Styled.RightContentWrapper>
  ), [
    givenRightContent,
    rightIconContent,
    onClickRightContent,
  ])

  return (
    <div>
      <Styled.Wrapper
        clickable={!_.isNil(onClick)}
        onClick={onClick}
      >
        { leftContent }
        { content }
        { rightContent }
      </Styled.Wrapper>
      { open && children }
    </div>
  )
}

export default SectionLabel
