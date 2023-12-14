import { styled } from '~/src/foundation'

import type { AlphaStackProps } from './AlphaStack.types'

interface ContainerProps extends
  Required<Pick<AlphaStackProps, 'interpolation' | 'direction' | 'justify' | 'align' | 'spacing'>> {}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: var(--b-alpha-stack-direction);
  gap: var(--b-alpha-stack-spacing);
  align-items: var(--b-alpha-stack-align);
  justify-content: var(--b-alpha-stack-justify);

  @supports not(gap: var(--b-alpha-stack-spacing)) {
    margin-top: calc(var(--b-alpha-stack-spacing) * -1);
    margin-left: calc(var(--b-alpha-stack-spacing) * -1);

    > * {
      margin-top: var(--b-alpha-stack-spacing);
      margin-left: var(--b-alpha-stack-spacing);
    }
  }
  ${({ interpolation }) => interpolation}
`
