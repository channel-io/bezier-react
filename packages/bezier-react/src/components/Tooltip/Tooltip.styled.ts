/* Internal dependencies */
import { styled, css, ellipsis, LineHeightAbsoluteNumber } from '~/src/foundation'
import type { InterpolationProps } from '~/src/types/Foundation'

interface ContentWrapperProps {
  disabled: boolean
}

export const Container = styled.div`
  position: relative;
`
export const ContentWrapper = styled.div<ContentWrapperProps>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000000000;

  ${({ disabled }) => disabled && css`
    display: none;
  `}
`

export const Content = styled.div<InterpolationProps>`
  box-sizing: border-box;
  width: max-content;
  max-width: 260px;
  height: max-content;
  padding: 8px 14px;
  color: ${({ foundation }) => foundation?.subTheme?.['txt-black-darkest']};
  word-break: normal;
  word-wrap: break-word;
  ${({ foundation }) => foundation?.elevation?.ev2(true)};
  ${({ foundation }) => foundation?.rounding?.round8};

  ${({ interpolation }) => interpolation}
`

export const EllipsisableContent = styled.div`
  ${ellipsis(20, LineHeightAbsoluteNumber.Lh18)}
`
