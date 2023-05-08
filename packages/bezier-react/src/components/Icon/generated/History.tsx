import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgHistory')
function SvgHistory(props: SVGProps<SVGSVGElement>) {
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
        d="M6.385 6.3A8 8 0 1 1 4 12H2c0 5.524 4.477 10 10 10s10-4.476 10-10c0-5.521-4.478-10-10-10A9.973 9.973 0 0 0 4.97 4.888L2.854 2.769A.5.5 0 0 0 2 3.123V8.75a.5.5 0 0 0 .5.5h5.627a.5.5 0 0 0 .353-.854L6.385 6.301ZM13 7a1 1 0 1 0-2 0v4.927a1 1 0 0 0 .544.89l3.184 1.63a1 1 0 0 0 .912-1.78L13 11.316V7Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgHistory)
