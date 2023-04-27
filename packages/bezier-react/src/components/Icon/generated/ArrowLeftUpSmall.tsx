import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgArrowLeftUpSmall')
function SvgArrowLeftUpSmall(props: SVGProps<SVGSVGElement>) {
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
        d="M16.95 16.95a1 1 0 0 0 0-1.414l-6.778-6.779h5.364a1 1 0 1 0 0-2H7.757a1 1 0 0 0-1 1v7.779a1 1 0 0 0 2 0v-5.364l6.779 6.778a1 1 0 0 0 1.414 0Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgArrowLeftUpSmall)
