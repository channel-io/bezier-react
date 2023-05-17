import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgTrendingLeft(props: SVGProps<SVGSVGElement>) {
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
        d="M6.15107 11.6345L11.3171 6.46853C11.5691 6.21653 12.0001 6.39453 12.0001 6.75153V9.99936H17.4996C17.7756 9.99936 17.9996 10.2234 17.9996 10.4994V13.4994C17.9996 13.7754 17.7756 13.9994 17.4996 13.9994H12.0001V17.2485C12.0001 17.6055 11.5691 17.7835 11.3171 17.5315L6.15107 12.3665C5.94907 12.1635 5.94907 11.8365 6.15107 11.6345Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgTrendingLeft)
