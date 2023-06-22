import { styled } from '~/src/foundation'

import { Icon as BaseIcon } from '~/src/components/Icon'

export const Icon = styled(BaseIcon)``

export const Trigger = styled.div`
  line-height: 0;

  &:not([data-state="closed"]) {
    ${Icon} {
      color: ${({ foundation }) => foundation?.theme?.['txt-black-darkest']};
    }
  }
`
