import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChevronUp(props: SVGProps<SVGSVGElement>) {
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
        d="M4.29289 15.2071C3.90237 14.8166 3.90237 14.1834 4.29289 13.7929L11.2929 6.79289C11.6834 6.40237 12.3166 6.40237 12.7071 6.79289L19.7071 13.7929C20.0976 14.1834 20.0976 14.8166 19.7071 15.2071C19.3166 15.5976 18.6834 15.5976 18.2929 15.2071L12 8.91421L5.70711 15.2071C5.31658 15.5976 4.68342 15.5976 4.29289 15.2071Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChevronUp)
