import { styled } from '~/src/foundation'

import { Icon as BaseIcon } from '~/src/components/Icon'
import { Tooltip as BaseTooltip } from '~/src/components/Tooltip'

export const Icon = styled(BaseIcon)``

export const Tooltip = styled(BaseTooltip)`
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    > ${Icon} {
      color: ${({ foundation }) => foundation?.theme?.['txt-black-darkest']};
    }
  }
`
