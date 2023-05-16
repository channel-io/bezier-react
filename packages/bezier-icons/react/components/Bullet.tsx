import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgBullet(props: SVGProps<SVGSVGElement>) {
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
        d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgBullet)
