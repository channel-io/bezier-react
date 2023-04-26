import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgPersonFilled')
function SvgPersonFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M16.487 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM2.001 21.478a.506.506 0 0 0 .507.522h18.959a.507.507 0 0 0 .507-.522c-.272-5.28-4.64-9.478-9.987-9.478S2.272 16.198 2 21.478Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgPersonFilled)
