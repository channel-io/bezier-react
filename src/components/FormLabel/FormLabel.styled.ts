/* Internal dependencies */
import { styled } from '../../foundation'
import { Tooltip as BaseTooltip } from '../Tooltip'

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Tooltip = styled(BaseTooltip)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 6px;
`
