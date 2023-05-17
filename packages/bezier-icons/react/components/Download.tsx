import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgDownload(props: SVGProps<SVGSVGElement>) {
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
        d="M11 4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4V13.5858L16.7929 9.79289C17.1834 9.40237 17.8166 9.40237 18.2071 9.79289C18.5976 10.1834 18.5976 10.8166 18.2071 11.2071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L5.79289 11.2071C5.40237 10.8166 5.40237 10.1834 5.79289 9.79289C6.18342 9.40237 6.81658 9.40237 7.20711 9.79289L11 13.5858V4Z"
      />
      <path
        fill="currentColor"
        d="M3 20C2.44772 20 2 20.4477 2 21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21C22 20.4477 21.5523 20 21 20H3Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgDownload)
