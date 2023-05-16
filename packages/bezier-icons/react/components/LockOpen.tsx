import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgLockOpen(props: SVGProps<SVGSVGElement>) {
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
        d="M5.5 9H16V7a4 4 0 0 0-7.2-2.4L7.2 3.4A6 6 0 0 1 18 7v2h.5a1.5 1.5 0 0 1 1.5 1.5v10a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 20.5v-10A1.5 1.5 0 0 1 5.5 9ZM18 11v9H6v-9h12Zm-8.502 3.5h5v2h-5v-2Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgLockOpen)
