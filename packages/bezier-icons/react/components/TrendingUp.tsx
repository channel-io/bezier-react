import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgTrendingUp(props: SVGProps<SVGSVGElement>) {
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
        d="M11.6341 6.1515L6.46807 11.3175C6.21607 11.5695 6.39407 12.0005 6.75107 12.0005H9.9989V17.5C9.9989 17.776 10.2229 18 10.4989 18H13.4989C13.7749 18 13.9989 17.776 13.9989 17.5V12.0005H17.2481C17.6051 12.0005 17.7831 11.5695 17.5311 11.3175L12.3661 6.1515C12.1631 5.9495 11.8361 5.9495 11.6341 6.1515Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgTrendingUp)
