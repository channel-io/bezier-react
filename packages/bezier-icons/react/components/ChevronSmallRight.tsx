import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChevronSmallRight(props: SVGProps<SVGSVGElement>) {
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
        d="M9.79289 6.79289C10.1834 6.40237 10.8166 6.40237 11.2071 6.79289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L11.2071 17.2071C10.8166 17.5976 10.1834 17.5976 9.79289 17.2071C9.40237 16.8166 9.40237 16.1834 9.79289 15.7929L13.5858 12L9.79289 8.20711C9.40237 7.81658 9.40237 7.18342 9.79289 6.79289Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChevronSmallRight)
