import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChevronSmallLeft(props: SVGProps<SVGSVGElement>) {
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
        d="M14.2071 17.2071C13.8166 17.5976 13.1834 17.5976 12.7929 17.2071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L12.7929 6.79289C13.1834 6.40237 13.8166 6.40237 14.2071 6.79289C14.5976 7.18342 14.5976 7.81658 14.2071 8.20711L10.4142 12L14.2071 15.7929C14.5976 16.1834 14.5976 16.8166 14.2071 17.2071Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChevronSmallLeft)
