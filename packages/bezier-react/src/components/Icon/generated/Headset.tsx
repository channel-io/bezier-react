import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgHeadset')
function SvgHeadset(props: SVGProps<SVGSVGElement>) {
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
        d="M12 2c4.411 0 8 3.589 8 8v7a1 1 0 0 1-1 1h-2.5c-.827 0-1.5-.673-1.5-1.5v-5c0-.827.673-1.5 1.5-1.5H18c0-3.309-2.691-6-6-6s-6 2.691-6 6h1.5c.827 0 1.5.673 1.5 1.5v5c0 .827-.673 1.5-1.5 1.5H6v1c0 .551.449 1 1 1h4a1 1 0 1 1 0 2H7c-1.654 0-3-1.346-3-3v-9c0-4.411 3.589-8 8-8Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgHeadset)
