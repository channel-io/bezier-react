/* Internal dependencies */
import React from 'react'
import { css, styled } from 'Foundation'
import { InterpolationProps } from 'Types/Foundation'

export const KeyValueListItemWrapper = styled.div<InterpolationProps>`
  ${({ foundation }) => foundation?.rounding?.round6}
  ${({ foundation }) => foundation?.transition.getTransitionsCSS(['background-color', 'color'])}
  ${({ interpolation }) => interpolation}
`

export interface KeyValueListItemContainerProps {
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

export const KeyValueListItemContainer = styled.div<KeyValueListItemContainerProps>`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  padding: 4px 6px;

  ${({ foundation }) => foundation?.rounding?.round6};
  ${({ onClick }) => onClick && css`
    cursor: pointer;
    &:hover {
      background-color: ${({ foundation }) => foundation?.theme?.['bg-black-lighter']};
    }
  `};
`
