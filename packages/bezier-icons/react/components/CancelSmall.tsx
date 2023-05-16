import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCancelSmall(props: SVGProps<SVGSVGElement>) {
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
        d="M16.95 8.464a1 1 0 1 0-1.414-1.414L12 10.586 8.465 7.051A1 1 0 0 0 7.05 8.464L10.586 12 7.05 15.535a1 1 0 1 0 1.414 1.414L12 13.414l3.536 3.536a1 1 0 0 0 1.414-1.415L13.414 12l3.536-3.536Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCancelSmall)
