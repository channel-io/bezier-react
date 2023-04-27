import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgVolumeBluetooth')
function SvgVolumeBluetooth(props: SVGProps<SVGSVGElement>) {
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
        d="m12.96 2-.131.008a1 1 0 0 0-.576.284L7.545 7H2.96a1 1 0 0 0-1 1v8l.007.117A1 1 0 0 0 2.96 17l4.585-.001 4.708 4.708a1 1 0 0 0 .707.293h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-1Zm0 2.413v15.172l-4.293-4.293-.099-.086a1 1 0 0 0-.608-.207h-4v-6h4a1 1 0 0 0 .707-.292l4.293-4.294Zm7.167 1.995a.75.75 0 0 0-1.21.592v3.477l-1.473-1.081a.75.75 0 1 0-.888 1.208l1.9 1.396-1.9 1.396a.75.75 0 1 0 .888 1.208l1.473-1.081V17a.75.75 0 0 0 1.21.592l3.334-2.593a.75.75 0 0 0-.017-1.196L20.99 12l2.454-1.803a.75.75 0 0 0 .017-1.196l-3.334-2.593Zm1.63 8.017-1.34-.985v2.027l1.34-1.043Zm-1.34-5.892v2.027l1.34-.985-1.34-1.042Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgVolumeBluetooth)
