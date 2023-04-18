import {
  ellipsis,
  styled,
} from '~/src/foundation'

import { type InterpolationProps } from '~/src/types/Foundation'

import { Text } from '~/src/components/Text'

export const KeyContent = styled.div<InterpolationProps>`
  display: flex;
  align-items: center;
  ${ellipsis()};
  ${({ interpolation }) => interpolation}
`

export const KeyText = styled(Text).attrs({
  forwardedAs: 'div',
  color: 'txt-black-dark',
})`
  margin-left: 8px;
`
