import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgBroadcastAlt')
function SvgBroadcastAlt(props: SVGProps<SVGSVGElement>) {
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
        d="M6.343 17.657a8 8 0 0 1 0-11.314A1 1 0 0 0 4.93 4.93c-3.905 3.905-3.905 10.237 0 14.142a1 1 0 0 0 1.414-1.414ZM19.071 4.929a1 1 0 1 0-1.414 1.414 8 8 0 0 1 0 11.314 1 1 0 1 0 1.414 1.414c3.905-3.905 3.905-10.237 0-14.142Zm-9.9 4.243a4 4 0 0 0 0 5.656 1 1 0 1 1-1.414 1.415 6 6 0 0 1 0-8.486 1 1 0 1 1 1.415 1.415Zm5.657-1.415a1 1 0 0 1 1.415 0 6 6 0 0 1 0 8.486 1 1 0 0 1-1.415-1.415 4 4 0 0 0 0-5.656 1 1 0 0 1 0-1.415ZM13 13.732a2 2 0 1 0-2 0V21a1 1 0 1 0 2 0v-7.268Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgBroadcastAlt)
