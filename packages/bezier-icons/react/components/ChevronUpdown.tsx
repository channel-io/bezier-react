import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChevronUpdown(props: SVGProps<SVGSVGElement>) {
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
        d="M5.79289 7.79289C5.40237 8.18342 5.40237 8.81658 5.79289 9.20711C6.18342 9.59763 6.81658 9.59763 7.20711 9.20711L12 4.41421L16.7929 9.20711C17.1834 9.59763 17.8166 9.59763 18.2071 9.20711C18.5976 8.81658 18.5976 8.18342 18.2071 7.79289L12.7071 2.29289C12.3166 1.90237 11.6834 1.90237 11.2929 2.29289L5.79289 7.79289Z"
      />
      <path
        fill="currentColor"
        d="M18.2071 16.2071C18.5976 15.8166 18.5976 15.1834 18.2071 14.7929C17.8166 14.4024 17.1834 14.4024 16.7929 14.7929L12 19.5858L7.20711 14.7929C6.81658 14.4024 6.18342 14.4024 5.79289 14.7929C5.40237 15.1834 5.40237 15.8166 5.79289 16.2071L11.2929 21.7071C11.6834 22.0976 12.3166 22.0976 12.7071 21.7071L18.2071 16.2071Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChevronUpdown)
