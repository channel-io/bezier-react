import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgCommunication')
function SvgCommunication(props: SVGProps<SVGSVGElement>) {
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
        d="M9.781 16.962A5.96 5.96 0 0 1 9 14a6 6 0 1 1 10.954 3.386L21 20l-2.614-1.046A5.972 5.972 0 0 1 15 20a5.998 5.998 0 0 1-5.219-3.038ZM7 14a8.001 8.001 0 0 1 7.219-7.962 6 6 0 1 0-10.173 6.348L3 15l2.614-1.046c.434.297.908.538 1.414.714A8.107 8.107 0 0 1 7 14ZM9 1a8.003 8.003 0 0 1 7.472 5.135 8.003 8.003 0 0 1 5.7 11.411l.685 1.711a2 2 0 0 1-2.6 2.6l-1.71-.684a8.003 8.003 0 0 1-11.018-4.308 7.959 7.959 0 0 1-2.075-.693l-1.711.685a2 2 0 0 1-2.6-2.6l.684-1.71A8 8 0 0 1 9 1Zm4 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgCommunication)
