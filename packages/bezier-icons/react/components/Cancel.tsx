import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCancel(props: SVGProps<SVGSVGElement>) {
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
        d="M19.071 6.34312C19.4616 5.9526 19.4616 5.31943 19.071 4.92891C18.6805 4.53839 18.0474 4.53839 17.6568 4.92891L12 10.5858L6.34314 4.92891C5.95262 4.53839 5.31945 4.53839 4.92893 4.92891C4.5384 5.31943 4.5384 5.9526 4.92893 6.34312L10.5858 12L4.92891 17.6568C4.53839 18.0474 4.53839 18.6805 4.92891 19.071C5.31943 19.4616 5.9526 19.4616 6.34312 19.071L12 13.4142L17.6568 19.071C18.0474 19.4616 18.6805 19.4616 19.0711 19.071C19.4616 18.6805 19.4616 18.0474 19.0711 17.6568L13.4142 12L19.071 6.34312Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCancel)
