/* Internal dependencies */
import { styled } from '~/src/foundation'

interface WrapperProps {
  horizontalPadding: number
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  padding: 0 ${({ horizontalPadding }) => horizontalPadding}px;
`

export default {
  Wrapper,
}
