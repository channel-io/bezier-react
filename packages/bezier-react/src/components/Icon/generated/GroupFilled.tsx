import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgGroupFilled')
function SvgGroupFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M8.984 11.2a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2ZM19.41 9.925a2.926 2.926 0 1 1-5.85 0 2.926 2.926 0 0 1 5.85 0Zm-4.095 3.686c.38-.069.77-.11 1.17-.11a6.5 6.5 0 0 1 6.48 5.976.497.497 0 0 1-.503.523h-3.997a.497.497 0 0 1-.493-.48 8.974 8.974 0 0 0-2.657-5.909ZM1.001 19.476a8 8 0 0 1 15.966 0 .504.504 0 0 1-.506.524H1.507a.504.504 0 0 1-.506-.524Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgGroupFilled)
