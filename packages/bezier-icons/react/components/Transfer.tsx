import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgTransfer(props: SVGProps<SVGSVGElement>) {
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
        d="M17 10.0686V8H5C4.44772 8 4 7.55228 4 7C4 6.44772 4.44772 6 5 6H17V3.93137C17 3.21864 17.8617 2.86171 18.3657 3.36568L21.2929 6.29289C21.6834 6.68341 21.6834 7.31658 21.2929 7.7071L18.3657 10.6343C17.8617 11.1383 17 10.7813 17 10.0686ZM7 18V20.0684C7 20.7811 6.13829 21.138 5.63432 20.6341L2.70711 17.7069C2.31658 17.3163 2.31658 16.6832 2.70711 16.2927L5.63432 13.3654C6.13829 12.8615 7 13.2184 7 13.9311V16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H7Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgTransfer)
