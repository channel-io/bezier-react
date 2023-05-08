import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgCalendar')
function SvgCalendar(props: SVGProps<SVGSVGElement>) {
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
        d="M4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21ZM5 8v11h14V8H5Zm1.628 3.81a1.237 1.237 0 1 1 2.473 0 1.237 1.237 0 0 1-2.473 0Zm4.129 0a1.237 1.237 0 1 1 2.474 0 1.237 1.237 0 0 1-2.474 0Zm5.366-1.237a1.237 1.237 0 1 0 0 2.475 1.237 1.237 0 0 0 0-2.475Zm-9.495 5.19a1.237 1.237 0 1 1 2.473-.001 1.237 1.237 0 0 1-2.473 0Zm5.366-1.238a1.237 1.237 0 1 0 0 2.475 1.237 1.237 0 0 0 0-2.475Zm2.891 1.237a1.237 1.237 0 1 1 2.475.001 1.237 1.237 0 0 1-2.475 0Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgCalendar)
