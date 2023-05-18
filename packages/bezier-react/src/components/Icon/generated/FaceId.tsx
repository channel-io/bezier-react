import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgFaceId(props: SVGProps<SVGSVGElement>) {
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
        d="M6 5a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V6a3 3 0 0 1 3-3h2a1 1 0 0 1 0 2H6ZM19 6a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2h2a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V6ZM6 19a1 1 0 0 1-1-1v-2a1 1 0 1 0-2 0v2a3 3 0 0 0 3 3h2a1 1 0 1 0 0-2H6ZM18 19a1 1 0 0 0 1-1v-2a1 1 0 1 1 2 0v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2ZM7.5 9.248a.748.748 0 0 1 1.496 0v1.354a.748.748 0 0 1-1.496 0V9.248ZM15.748 8.5a.748.748 0 0 0-.748.748v1.354a.748.748 0 0 0 1.497 0V9.248a.748.748 0 0 0-.749-.748ZM11.7 9.285a.775.775 0 1 1 1.55 0v3.375c0 .835-.68 1.513-1.514 1.513h-.386a.775.775 0 1 1 0-1.55h.35V9.286ZM14.306 14.886a.775.775 0 0 1 1.052 1.138A4.936 4.936 0 0 1 12 17.337a4.936 4.936 0 0 1-3.358-1.313.775.775 0 0 1 1.052-1.138c.63.582 1.448.902 2.306.902.858 0 1.677-.32 2.306-.902Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgFaceId)
