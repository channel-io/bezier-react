import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgUpload(props: SVGProps<SVGSVGElement>) {
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
        d="M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16L11 6.41421L7.20711 10.2071C6.81658 10.5976 6.18342 10.5976 5.79289 10.2071C5.40237 9.81658 5.40237 9.18342 5.79289 8.79289L11.2929 3.29289C11.6834 2.90237 12.3166 2.90237 12.7071 3.29289L18.2071 8.79289C18.5976 9.18342 18.5976 9.81658 18.2071 10.2071C17.8166 10.5976 17.1834 10.5976 16.7929 10.2071L13 6.41421L13 16Z"
      />
      <path
        fill="currentColor"
        d="M3 20C2.44772 20 2 20.4477 2 21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21C22 20.4477 21.5523 20 21 20H3Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgUpload)
