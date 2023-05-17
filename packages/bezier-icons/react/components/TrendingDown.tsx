import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgTrendingDown(props: SVGProps<SVGSVGElement>) {
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
        d="M11.6341 17.8485L6.46807 12.6825C6.21607 12.4305 6.39407 11.9995 6.75107 11.9995H9.9989V6.5C9.9989 6.224 10.2229 6 10.4989 6H13.4989C13.7749 6 13.9989 6.224 13.9989 6.5V11.9995H17.2481C17.6051 11.9995 17.7831 12.4305 17.5311 12.6825L12.3661 17.8485C12.1631 18.0505 11.8361 18.0505 11.6341 17.8485Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgTrendingDown)
