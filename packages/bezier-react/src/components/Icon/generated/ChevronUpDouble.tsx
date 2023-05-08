import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgChevronUpDouble')
function SvgChevronUpDouble(props: SVGProps<SVGSVGElement>) {
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
        d="M4.35 17.24a1 1 0 1 0 1.3 1.52L12 13.316l6.35 5.442a1 1 0 1 0 1.3-1.518l-7-6a1 1 0 0 0-1.3 0l-7 6Z"
      />
      <path
        fill="currentColor"
        d="M4.35 9.24a1 1 0 1 0 1.3 1.52L12 5.316l6.35 5.442a1 1 0 1 0 1.3-1.518l-7-6a1 1 0 0 0-1.3 0l-7 6Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgChevronUpDouble)
