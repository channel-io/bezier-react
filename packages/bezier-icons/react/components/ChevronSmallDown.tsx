import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChevronSmallDown(props: SVGProps<SVGSVGElement>) {
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
        d="M17.2071 9.79289C17.5976 10.1834 17.5976 10.8166 17.2071 11.2071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L6.79289 11.2071C6.40237 10.8166 6.40237 10.1834 6.79289 9.79289C7.18342 9.40237 7.81658 9.40237 8.20711 9.79289L12 13.5858L15.7929 9.79289C16.1834 9.40237 16.8166 9.40237 17.2071 9.79289Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChevronSmallDown)
