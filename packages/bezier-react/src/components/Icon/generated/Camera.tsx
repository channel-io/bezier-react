import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgCamera')
function SvgCamera(props: SVGProps<SVGSVGElement>) {
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
        d="M9.236 3a3 3 0 0 0-2.683 1.658L6.382 5H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-1.382l-.17-.342A3 3 0 0 0 14.763 3H9.236Zm-.894 2.553A1 1 0 0 1 9.236 5h5.528a1 1 0 0 1 .894.553l.448.894A1 1 0 0 0 17 7h2a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 0 .894-.553l.448-.894ZM7 12c0 2.756 2.243 5 5 5s5-2.244 5-5c0-2.757-2.243-5-5-5s-5 2.243-5 5Zm2 0a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgCamera)
