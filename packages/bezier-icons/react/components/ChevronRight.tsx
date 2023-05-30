import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChevronRight(props: SVGProps<SVGSVGElement>) {
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
        d="M8.79289 4.29289C9.18342 3.90237 9.81658 3.90237 10.2071 4.29289L17.2071 11.2929C17.5976 11.6834 17.5976 12.3166 17.2071 12.7071L10.2071 19.7071C9.81658 20.0976 9.18342 20.0976 8.79289 19.7071C8.40237 19.3166 8.40237 18.6834 8.79289 18.2929L15.0858 12L8.79289 5.70711C8.40237 5.31658 8.40237 4.68342 8.79289 4.29289Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChevronRight)
