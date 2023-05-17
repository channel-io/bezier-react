import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChevronSmallUp(props: SVGProps<SVGSVGElement>) {
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
        d="M6.79289 14.2071C6.40237 13.8166 6.40237 13.1834 6.79289 12.7929L11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L17.2071 12.7929C17.5976 13.1834 17.5976 13.8166 17.2071 14.2071C16.8166 14.5976 16.1834 14.5976 15.7929 14.2071L12 10.4142L8.20711 14.2071C7.81658 14.5976 7.18342 14.5976 6.79289 14.2071Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChevronSmallUp)
