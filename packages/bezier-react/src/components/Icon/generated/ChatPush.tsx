import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgChatPush(props: SVGProps<SVGSVGElement>) {
  return (
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
        d="M18.5 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.56 6.748a7.945 7.945 0 0 0 .854-4.932 5.478 5.478 0 0 0 1.871-.905l.01.05c.47 2.333.135 4.66-.97 6.728-.048.09-.119.267-.06.443l.868 2.603c.18.543.042 1.131-.363 1.535a1.497 1.497 0 0 1-1.535.363l-2.605-.868c-.174-.059-.35.011-.44.06A9.91 9.91 0 0 1 12 22c-.486 0-.975-.035-1.464-.106-4.27-.616-7.726-4.01-8.404-8.25-.519-3.247.503-6.425 2.804-8.722 2.301-2.297 5.48-3.31 8.728-2.787.143.023.285.05.425.079a5.479 5.479 0 0 0-.905 1.87A8.403 8.403 0 0 0 11.998 4 7.933 7.933 0 0 0 6.35 6.338c-1.84 1.837-2.659 4.385-2.243 6.99.542 3.385 3.303 6.094 6.716 6.587a7.98 7.98 0 0 0 4.926-.854c.642-.344 1.357-.413 2.015-.194l1.656.552-.552-1.655c-.218-.656-.15-1.372.193-2.016Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgChatPush)
