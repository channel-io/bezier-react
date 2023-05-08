import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgSpaceVertical')
function SvgSpaceVertical(props: SVGProps<SVGSVGElement>) {
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
        d="M12.707 21.293a1 1 0 0 1-1.414 0l-2.927-2.927A.8.8 0 0 1 8.93 17H11V7H8.931a.8.8 0 0 1-.565-1.366l2.927-2.927a1 1 0 0 1 1.414 0l2.927 2.927A.8.8 0 0 1 15.07 7H13v10h2.069a.8.8 0 0 1 .565 1.366l-2.927 2.927Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgSpaceVertical)
