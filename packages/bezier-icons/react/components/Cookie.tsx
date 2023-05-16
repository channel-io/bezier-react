import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCookie(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.005 12c0 4.41 3.589 8 8 8 4.41 0 8-3.59 8-8 0-.23-.011-.461-.033-.697a8.216 8.216 0 0 1-7.27-7.27A7.47 7.47 0 0 0 12.005 4c-4.411 0-8 3.589-8 8Zm17.673-2.65.15.817c.119.635.177 1.235.177 1.833 0 5.514-4.486 10-10 10s-10-4.486-10-10 4.486-10 10-10c.59 0 1.208.06 1.833.175l.817.152v.83a6.207 6.207 0 0 0 6.192 6.193h.83ZM10 7a1.75 1.75 0 1 1 0 3.5A1.75 1.75 0 0 1 10 7Zm5 4.5A1.75 1.75 0 1 0 15 15 1.75 1.75 0 0 0 15 11.5Zm-4.75 5.25a1.75 1.75 0 1 1 3.499-.001 1.75 1.75 0 0 1-3.499.001Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCookie)
