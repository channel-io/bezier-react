import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgRepeat')
function SvgRepeat(props: SVGProps<SVGSVGElement>) {
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
        d="M14 3.931V6H7a5 5 0 0 0-5 5v4a1 1 0 1 0 2 0v-4a3 3 0 0 1 3-3h7v2.069a.8.8 0 0 0 1.366.565l2.927-2.927a1 1 0 0 0 0-1.414l-2.927-2.927A.8.8 0 0 0 14 3.93Z"
      />
      <path
        fill="currentColor"
        d="M10 16v-2.069a.8.8 0 0 0-1.366-.566l-2.927 2.928a1 1 0 0 0 0 1.414l2.927 2.927A.8.8 0 0 0 10 20.068V18h7a5 5 0 0 0 5-5V9a1 1 0 1 0-2 0v4a3 3 0 0 1-3 3h-7Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgRepeat)
