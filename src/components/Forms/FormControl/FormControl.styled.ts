/* Internal dependencies */
import { styled } from 'Foundation'
import { InterpolationProps } from 'Types/Foundation'

export const Box = styled.div<InterpolationProps>`
  position: relative;
  ${({ interpolation }) => interpolation}
`

export const TopLabelWrapper = styled.div`
  padding: 0 2px;
  margin-bottom: 4px;
`

export const HelperTextWrapper = styled.div`
  padding: 0 2px;
  margin-top: 4px;
`

export const Flex = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

// FIXME: Stack 컴포넌트를 사용한 방식으로 변경
export const LeftLabelWrapper = styled.div`
  margin-right: 12px;
`
