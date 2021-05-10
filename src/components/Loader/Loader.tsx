/* External dependencies */
import React from 'react'

/* Internal dependencies */
import LoaderProps, { SpinnerSize, SpinnerThickness } from './Loader.types'
import { StyledLoader, Spinner, Content } from './Loader.styled'

export const LOADER_TEST_ID = 'ch-design-system-loader'

function Loader({
  testId = LOADER_TEST_ID,
  className,
  children,
  isLoading = true,
  size = SpinnerSize.Normal,
  thickness = SpinnerThickness.Normal,
  color = 'bg-black-dark',
  delayed = false,
  dim = false,
  occupy = false,
  // NOTE: thickness, weight...
}: LoaderProps) {
  return (
    <StyledLoader
      className={className}
      dim={dim}
      relative={!occupy}
      delayed={delayed}
    >
      { /*
        - div에 key가 있는 이유
        Key가 없을 경우, isLoading이 true에서 false로 바뀔 때에
        div가 *update*가 일어나 spinner 애니메이션이 그대로 유지되는 경우가 있음.
        각 div에 서로 다른 key를 부여하여 isLoading이 바뀔 때에 div가 지워지고 새로 렌더되도록 함.
      */ }
      { isLoading
        ? (
          <Spinner
            key="spinner"
            size={size}
            thickness={thickness}
            color={color}
            data-testid={testId}
          />
        ) : (
          <Content key="content">{ children }</Content>) }
    </StyledLoader>
  )
}

export default Loader
