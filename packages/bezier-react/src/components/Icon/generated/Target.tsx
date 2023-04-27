import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgTarget')
function SvgTarget(props: SVGProps<SVGSVGElement>) {
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
        d="M13 17v2.93A8.008 8.008 0 0 0 19.931 13h-2.93v-2h2.93a8.007 8.007 0 0 0-6.93-6.93V7h-2V4.07A8.008 8.008 0 0 0 4.068 11H7v2H4.07A8.01 8.01 0 0 0 11 19.93V17h2ZM2 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10S2 17.514 2 12Zm8 0a2 2 0 1 1 4.002 0A2 2 0 0 1 10 12Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgTarget)
