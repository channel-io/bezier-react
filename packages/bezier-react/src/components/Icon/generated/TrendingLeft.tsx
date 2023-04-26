import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgTrendingLeft')
function SvgTrendingLeft(props: SVGProps<SVGSVGElement>) {
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
        d="m6.151 11.634 5.166-5.165a.4.4 0 0 1 .683.283v3.247h5.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H12v3.25a.4.4 0 0 1-.683.283l-5.166-5.165a.518.518 0 0 1 0-.733Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgTrendingLeft)
