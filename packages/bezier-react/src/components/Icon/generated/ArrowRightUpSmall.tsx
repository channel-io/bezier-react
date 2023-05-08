import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgArrowRightUpSmall')
function SvgArrowRightUpSmall(props: SVGProps<SVGSVGElement>) {
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
        d="M7.05 16.95a1 1 0 0 0 1.414 0l6.779-6.778v5.364a1 1 0 0 0 2 0V7.757a1 1 0 0 0-1-1H8.464a1 1 0 1 0 0 2h5.364L7.05 15.536a1 1 0 0 0 0 1.414Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgArrowRightUpSmall)
