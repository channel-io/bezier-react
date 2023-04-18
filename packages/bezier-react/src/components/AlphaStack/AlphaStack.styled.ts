import { styled } from '~/src/foundation'

import type { AlphaStackProps } from './AlphaStack.types'

interface ContainerProps extends
  Required<Pick<AlphaStackProps, 'interpolation' | 'direction' | 'justify' | 'align' | 'spacing'>> {}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: var(--bezier-alpha-stack-direction);
  gap: var(--bezier-alpha-stack-spacing);
  align-items: var(--bezier-alpha-stack-align);
  justify-content: var(--bezier-alpha-stack-justify);

  @supports not(gap: var(--bezier-alpha-stack-spacing)) {
    margin-top: calc(var(--bezier-alpha-stack-spacing) * -1);
    margin-left: calc(var(--bezier-alpha-stack-spacing) * -1);

    > * {
      margin-top: var(--bezier-alpha-stack-spacing);
      margin-left: var(--bezier-alpha-stack-spacing);
    }
  }
  ${({ interpolation }) => interpolation}
`
