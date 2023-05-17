import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChevronDown(props: SVGProps<SVGSVGElement>) {
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
        d="M19.7071 8.79289C20.0976 9.18342 20.0976 9.81658 19.7071 10.2071L12.7071 17.2071C12.3166 17.5976 11.6834 17.5976 11.2929 17.2071L4.29289 10.2071C3.90237 9.81658 3.90237 9.18342 4.29289 8.79289C4.68342 8.40237 5.31658 8.40237 5.70711 8.79289L12 15.0858L18.2929 8.79289C18.6834 8.40237 19.3166 8.40237 19.7071 8.79289Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChevronDown)
