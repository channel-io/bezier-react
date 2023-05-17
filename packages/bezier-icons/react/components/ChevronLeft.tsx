import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChevronLeft(props: SVGProps<SVGSVGElement>) {
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
        d="M15.2071 19.7071C14.8166 20.0976 14.1834 20.0976 13.7929 19.7071L6.79289 12.7071C6.40237 12.3166 6.40237 11.6834 6.79289 11.2929L13.7929 4.29289C14.1834 3.90237 14.8166 3.90237 15.2071 4.29289C15.5976 4.68342 15.5976 5.31658 15.2071 5.70711L8.91421 12L15.2071 18.2929C15.5976 18.6834 15.5976 19.3166 15.2071 19.7071Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChevronLeft)
