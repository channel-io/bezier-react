import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgTrendingRight(props: SVGProps<SVGSVGElement>) {
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
        d="M17.8485 11.634L12.6825 6.46804C12.4305 6.21604 11.9995 6.39404 11.9995 6.75104V9.99887H6.5C6.224 9.99887 6 10.2229 6 10.4989V13.4989C6 13.7749 6.224 13.9989 6.5 13.9989H11.9995V17.248C11.9995 17.605 12.4305 17.783 12.6825 17.531L17.8485 12.366C18.0505 12.163 18.0505 11.836 17.8485 11.634Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgTrendingRight)
