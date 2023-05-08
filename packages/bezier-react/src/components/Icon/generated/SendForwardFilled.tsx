import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgSendForwardFilled')
function SvgSendForwardFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M20.919 5.01h-18a1 1 0 0 0-.72 1.693l5.549 5.773 9.97-5.021.35.607-9.323 6.148 2.176 7.721a.998.998 0 0 0 1.463.595c.149-.086.276-.21.366-.366l9.035-15.65a1 1 0 0 0-.866-1.5Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgSendForwardFilled)
