import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgVolumeBluetoothFilled')
function SvgVolumeBluetoothFilled(props: SVGProps<SVGSVGElement>) {
  const Svg = (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.829 2.008 12.96 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-1a1 1 0 0 1-.707-.293l-4.708-4.708H2.96a1 1 0 0 1-.993-.883L1.96 16V8a1 1 0 0 1 1-1h4.585l4.708-4.707a1 1 0 0 1 .576-.284Zm7.298 4.4a.75.75 0 0 0-1.21.592v3.477l-1.473-1.081a.75.75 0 1 0-.888 1.208l1.9 1.396-1.9 1.396a.75.75 0 1 0 .888 1.208l1.473-1.081V17a.75.75 0 0 0 1.21.592l3.334-2.593a.75.75 0 0 0-.017-1.196L20.99 12l2.454-1.803a.75.75 0 0 0 .017-1.196l-3.334-2.593Zm1.63 8.017-1.34-.985v2.027l1.34-1.043Zm-1.34-5.892v2.027l1.34-.985-1.34-1.042Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgVolumeBluetoothFilled)
