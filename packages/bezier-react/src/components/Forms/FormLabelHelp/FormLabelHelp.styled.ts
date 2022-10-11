/* Internal dependencies */
import { styled } from 'Foundation'
import { Tooltip as BaseTooltip } from 'Components/Tooltip'

import { Icon as BaseIcon } from 'Components/Icon'

export const Icon = styled(BaseIcon)``

export const Tooltip = styled(BaseTooltip)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 6px;

  &:hover {
    > ${Icon} {
      color: ${({ foundation }) => foundation?.theme?.['txt-black-darkest']};
    }
  }
`
