/* External dependencies */
import { isNil } from 'lodash-es'

/* Internal dependencies */
import {
  css,
  styled,
} from '~/src/foundation'
import type StackItemProps from './StackItem.types'
import { flex } from '~/src/components/Stack/util'

interface ContainerProps extends
  Required<Pick<
  StackItemProps,
  | 'direction'
  | 'justify'
  | 'align'
  | 'interpolation'>> {}

export const Container = styled.div<ContainerProps>`
  ${({ justify }) => !isNil(justify) && css`
    justify-self: ${flex(justify)};
  `}

  ${({ align }) => !isNil(align) && css`
    align-self: ${flex(align)};
  `}

  flex-basis: var(--main-axis-size);
  flex-grow: var(--grow-weight);
  flex-shrink: var(--shrink-weight);

  ${({ direction }) => (
    direction === 'horizontal'
      ? css`
        margin-left: var(--margin-before);
        margin-right: var(--margin-after);
      `
      : css`
        margin-top: var(--margin-before);
        margin-bottom: var(--margin-after);
      `
  )}

  ${({ interpolation }) => interpolation}
`
