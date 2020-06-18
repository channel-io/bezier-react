/* External dependencies */
import React, { ReactElement, useCallback, MouseEvent } from 'react'

/* Internal dependencies */
import { SwitchProps } from './Switch.types'
import { Wrapper, Content } from './Switch.styled'

function Switch({
  className,
  style,
  checked = false,
  disabled = false,
  size = 16,
  onClick,
}: SwitchProps): ReactElement {
  const handleClick = useCallback((event: MouseEvent) => {
    if (!disabled && onClick) {
      onClick(!checked, event)
    }
  }, [onClick, checked, disabled])

  return (
    <Wrapper
      className={className}
      size={size}
      checked={checked}
      disabled={disabled}
      style={style}
      onClick={handleClick}
    >
      <Content
        size={size}
        checked={checked}
      />
    </Wrapper>
  )
}

export default Switch
