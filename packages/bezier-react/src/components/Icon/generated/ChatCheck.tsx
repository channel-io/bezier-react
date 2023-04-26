import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgChatCheck')
function SvgChatCheck(props: SVGProps<SVGSVGElement>) {
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
        d="M18.867 17.764c-.218-.656-.15-1.372.193-2.016.884-1.655 1.151-3.52.774-5.394a7.946 7.946 0 0 0-6.49-6.245A8.423 8.423 0 0 0 11.998 4 7.933 7.933 0 0 0 6.35 6.338c-1.84 1.837-2.659 4.385-2.243 6.99.542 3.385 3.303 6.094 6.716 6.587a7.98 7.98 0 0 0 4.926-.854c.642-.344 1.357-.413 2.015-.194l1.656.552-.552-1.655Zm1.958-1.075c-.048.09-.119.267-.06.443l.868 2.603c.18.543.042 1.131-.363 1.535a1.497 1.497 0 0 1-1.535.363l-2.605-.868c-.174-.059-.35.011-.44.06A9.91 9.91 0 0 1 12 22c-.486 0-.975-.035-1.464-.106-4.27-.616-7.726-4.01-8.404-8.25-.519-3.247.503-6.425 2.804-8.722 2.301-2.297 5.48-3.31 8.728-2.787 4.053.656 7.321 3.8 8.131 7.825.47 2.334.135 4.661-.97 6.73ZM7.363 10.978l3.04 2.92 6.178-5.804 1.369 1.457-7.561 7.106-4.411-4.236 1.385-1.443Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgChatCheck)
