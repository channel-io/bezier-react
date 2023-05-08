import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgArrowLeftDownSmall')
function SvgArrowLeftDownSmall(props: SVGProps<SVGSVGElement>) {
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
        d="M16.95 7.05a1 1 0 0 0-1.414 0L8.757 13.83V8.465a1 1 0 0 0-2 0v7.778a1 1 0 0 0 1 1h7.779a1 1 0 0 0 0-2h-5.364l6.778-6.778a1 1 0 0 0 0-1.415Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgArrowLeftDownSmall)
