import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgFastForward')
function SvgFastForward(props: SVGProps<SVGSVGElement>) {
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
        d="m12 13.034-8.834 5.885A.75.75 0 0 1 2 18.294V5.707a.75.75 0 0 1 1.166-.625L12 10.966v-5.26a.75.75 0 0 1 1.166-.625l9.448 6.295a.75.75 0 0 1 0 1.248l-9.448 6.295A.75.75 0 0 1 12 18.294v-5.26Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgFastForward)
