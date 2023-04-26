import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgArrowUp')
function SvgArrowUp(props: SVGProps<SVGSVGElement>) {
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
        d="M3.285 11.837a1 1 0 0 0 1.413.044L11 5.959V20a1 1 0 1 0 2 0V5.933l6.329 5.948a1 1 0 0 0 1.37-1.458L13.04 3.227a1.5 1.5 0 0 0-2.055 0L3.33 10.423a1 1 0 0 0-.044 1.414Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgArrowUp)
