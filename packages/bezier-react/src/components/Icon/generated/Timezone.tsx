import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgTimezone')
function SvgTimezone(props: SVGProps<SVGSVGElement>) {
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
        d="M18.756 5.332a7.54 7.54 0 0 0-12.513 0c-1.76 2.573-1.597 6.013.146 8.599l5.667 8.408a.534.534 0 0 0 .888 0l5.666-8.408c1.743-2.586 1.908-6.026.146-8.599ZM18 9.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM13.5 6a1 1 0 1 0-2 0v3.5a1 1 0 0 0 .486.857l2.5 1.5a1 1 0 0 0 1.028-1.714L13.5 8.933V6Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgTimezone)
