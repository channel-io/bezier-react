import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgInbox')
function SvgInbox(props: SVGProps<SVGSVGElement>) {
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
        d="M20 7v5h-5a3 3 0 1 1-6 0H4V7h16Zm.5-2h-17C2.673 5 2 5.673 2 6.5v11c0 .827.673 1.5 1.5 1.5h17c.827 0 1.5-.673 1.5-1.5v-11c0-.827-.673-1.5-1.5-1.5Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgInbox)
