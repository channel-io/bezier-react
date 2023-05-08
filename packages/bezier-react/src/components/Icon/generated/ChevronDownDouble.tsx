import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgChevronDownDouble')
function SvgChevronDownDouble(props: SVGProps<SVGSVGElement>) {
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
        d="M19.65 6.76a1 1 0 1 0-1.3-1.52L12 10.684 5.65 5.241a1 1 0 1 0-1.3 1.518l7 6a1 1 0 0 0 1.3 0l7-6Z"
      />
      <path
        fill="currentColor"
        d="M19.65 14.76a1 1 0 1 0-1.3-1.52L12 18.684l-6.35-5.442a1 1 0 0 0-1.3 1.518l7 6a1 1 0 0 0 1.3 0l7-6Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgChevronDownDouble)
