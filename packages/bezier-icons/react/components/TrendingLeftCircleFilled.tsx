import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgTrendingLeftCircleFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M2 12C2 6.478 6.477 2 12 2C17.523 2 22 6.478 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12ZM11.3171 6.4685L6.15107 11.6345C5.94907 11.8365 5.94907 12.1635 6.15107 12.3665L11.3171 17.5315C11.5691 17.7835 12.0001 17.6055 12.0001 17.2485V14H16.6421C16.8397 14 17 13.776 17 13.5V10.5C17 10.224 16.8397 10 16.6421 10H12.0001V6.7515C12.0001 6.3945 11.5691 6.2165 11.3171 6.4685Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgTrendingLeftCircleFilled)
