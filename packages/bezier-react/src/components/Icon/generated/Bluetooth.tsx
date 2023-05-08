import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgBluetooth')
function SvgBluetooth(props: SVGProps<SVGSVGElement>) {
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
        d="M11.553 2.106A1 1 0 0 1 12.6 2.2l6 4.5a1 1 0 0 1 0 1.6L13.667 12l4.933 3.7a1 1 0 0 1 0 1.6l-6 4.5A1 1 0 0 1 11 21v-7l-4.4 3.3a1 1 0 1 1-1.2-1.6l4.933-3.7L5.4 8.3a1 1 0 0 1 1.2-1.6L11 10V3a1 1 0 0 1 .553-.894ZM13 14l3.333 2.5L13 19v-5Zm0-4V5l3.333 2.5L13 10Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgBluetooth)
