import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgButtonRoute')
function SvgButtonRoute(props: SVGProps<SVGSVGElement>) {
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
        d="M4 9v7h3v2H3.5A1.5 1.5 0 0 1 2 16.5V3h2v4h3v2H4ZM9.5 4A1.5 1.5 0 0 0 8 5.5v4A1.5 1.5 0 0 0 9.5 11h11A1.5 1.5 0 0 0 22 9.5v-4A1.5 1.5 0 0 0 20.5 4h-11ZM9.5 13A1.5 1.5 0 0 0 8 14.5v4A1.5 1.5 0 0 0 9.5 20h11a1.5 1.5 0 0 0 1.5-1.5v-4a1.5 1.5 0 0 0-1.5-1.5h-11Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgButtonRoute)
