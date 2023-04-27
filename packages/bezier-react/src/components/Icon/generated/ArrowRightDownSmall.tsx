import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgArrowRightDownSmall')
function SvgArrowRightDownSmall(props: SVGProps<SVGSVGElement>) {
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
        d="M7.05 7.05a1 1 0 0 0 0 1.414l6.779 6.779H8.463a1 1 0 1 0 0 2h7.779a1 1 0 0 0 1-1V8.464a1 1 0 1 0-2 0v5.364L8.464 7.05a1 1 0 0 0-1.414 0Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgArrowRightDownSmall)
