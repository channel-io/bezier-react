import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgSearchBold')
function SvgSearchBold(props: SVGProps<SVGSVGElement>) {
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
        d="M18 10a8 8 0 1 0-3.503 6.618l4.442 4.443a1.5 1.5 0 0 0 2.122-2.122l-4.443-4.442A7.963 7.963 0 0 0 18 10Zm-3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgSearchBold)
