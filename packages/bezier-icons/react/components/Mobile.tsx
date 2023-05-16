import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgMobile(props: SVGProps<SVGSVGElement>) {
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
        d="M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8Zm8 3H8v14h8V5Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgMobile)
