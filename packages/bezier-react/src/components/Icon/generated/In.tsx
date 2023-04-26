import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgIn')
function SvgIn(props: SVGProps<SVGSVGElement>) {
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
        d="M10.379 15.414 12.793 13H3a1 1 0 1 1 0-2h9.794l-2.415-2.415a1 1 0 0 1 1.414-1.414l3.768 3.768a1.5 1.5 0 0 1 0 2.121l-3.768 3.768a1 1 0 0 1-1.414-1.414Z"
      />
      <path
        fill="currentColor"
        d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-5a1 1 0 1 1 0-2h5a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-5a1 1 0 1 1 0-2h5Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgIn)
