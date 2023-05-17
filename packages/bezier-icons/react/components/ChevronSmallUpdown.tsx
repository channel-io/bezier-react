import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChevronSmallUpdown(props: SVGProps<SVGSVGElement>) {
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
        d="M16.2071 13.7929C16.5976 14.1834 16.5976 14.8166 16.2071 15.2071L12.7071 18.7071C12.3166 19.0976 11.6834 19.0976 11.2929 18.7071L7.79289 15.2071C7.40237 14.8166 7.40237 14.1834 7.79289 13.7929C8.18342 13.4024 8.81658 13.4024 9.20711 13.7929L12 16.5858L14.7929 13.7929C15.1834 13.4024 15.8166 13.4024 16.2071 13.7929Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.2071 10.2071C15.8166 10.5976 15.1834 10.5976 14.7929 10.2071L12 7.41421L9.20711 10.2071C8.81658 10.5976 8.18342 10.5976 7.79289 10.2071C7.40237 9.81658 7.40237 9.18342 7.79289 8.79289L11.2929 5.29289C11.6834 4.90237 12.3166 4.90237 12.7071 5.29289L16.2071 8.79289C16.5976 9.18342 16.5976 9.81658 16.2071 10.2071Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChevronSmallUpdown)
