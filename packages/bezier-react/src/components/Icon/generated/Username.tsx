import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgUsername')
function SvgUsername(props: SVGProps<SVGSVGElement>) {
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
        d="M14.485 19.607c.477-.156 1.016.04 1.225.496.25.547.012 1.201-.56 1.39a10.142 10.142 0 0 1-5.173.307c-4.089-.804-7.163-3.992-7.84-8.114A10.011 10.011 0 0 1 13.687 2.138c4.212.691 7.577 4.117 8.2 8.342a10.024 10.024 0 0 1-1.052 6.21c-.719 1.351-2.363 1.922-3.784 1.345a3.015 3.015 0 0 1-1.727-1.837 5.347 5.347 0 0 1-3.606 1.4c-3.019 0-5.451-2.513-5.451-5.598s2.432-5.598 5.45-5.598a5.34 5.34 0 0 1 3.485 1.292.942.942 0 0 1 1.85.247v7.3c0 .413.368.785.751.94.483.197 1.035.005 1.267-.43.797-1.5 1.1-3.219.84-4.979-.497-3.365-3.194-6.11-6.547-6.66a8.011 8.011 0 0 0-9.25 9.25c.541 3.3 2.983 5.833 6.25 6.476a8.144 8.144 0 0 0 4.123-.23ZM15.168 12c0 1.994-1.553 3.598-3.451 3.598-1.9 0-3.451-1.604-3.451-3.598 0-1.995 1.551-3.598 3.45-3.598 1.9 0 3.452 1.604 3.452 3.598Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgUsername)
