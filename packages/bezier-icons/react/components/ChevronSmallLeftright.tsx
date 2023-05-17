import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChevronSmallLeftright(props: SVGProps<SVGSVGElement>) {
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
        d="M10.2071 16.2071C9.81658 16.5976 9.18342 16.5976 8.79289 16.2071L5.29289 12.7071C4.90237 12.3166 4.90237 11.6834 5.29289 11.2929L8.79289 7.79289C9.18342 7.40237 9.81658 7.40237 10.2071 7.79289C10.5976 8.18342 10.5976 8.81658 10.2071 9.20711L7.41421 12L10.2071 14.7929C10.5976 15.1834 10.5976 15.8166 10.2071 16.2071Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.7929 16.2071C13.4024 15.8166 13.4024 15.1834 13.7929 14.7929L16.5858 12L13.7929 9.20711C13.4024 8.81658 13.4024 8.18342 13.7929 7.79289C14.1834 7.40237 14.8166 7.40237 15.2071 7.79289L18.7071 11.2929C19.0976 11.6834 19.0976 12.3166 18.7071 12.7071L15.2071 16.2071C14.8166 16.5976 14.1834 16.5976 13.7929 16.2071Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChevronSmallLeftright)
