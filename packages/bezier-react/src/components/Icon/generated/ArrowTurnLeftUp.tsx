import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgArrowTurnLeftUp')
function SvgArrowTurnLeftUp(props: SVGProps<SVGSVGElement>) {
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
        d="M6.793 14.207a1 1 0 0 0 1.414-1.414L5.414 10H14a5 5 0 0 1 5 5v4a1 1 0 1 0 2 0v-4a7 7 0 0 0-7-7H5.414l2.793-2.793a1 1 0 0 0-1.414-1.414l-4.5 4.5a1 1 0 0 0 0 1.414l4.5 4.5Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgArrowTurnLeftUp)
