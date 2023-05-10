import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgArrowUpSmall')
function SvgArrowUpSmall(props: SVGProps<SVGSVGElement>) {
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
        d="M12 19a1 1 0 0 0 1-1V8.414l3.793 3.793a1 1 0 0 0 1.414-1.414l-5.5-5.5a1 1 0 0 0-1.414 0l-5.5 5.5a1 1 0 1 0 1.414 1.414L11 8.414V18a1 1 0 0 0 1 1Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgArrowUpSmall)
