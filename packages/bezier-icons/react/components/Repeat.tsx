import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgRepeat(props: SVGProps<SVGSVGElement>) {
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
        d="M14 3.93137V6H7C4.23858 6 2 8.23858 2 11V15C2 15.5523 2.44772 16 3 16C3.55228 16 4 15.5523 4 15V11C4 9.34315 5.34315 8 7 8H14V10.0686C14 10.7813 14.8617 11.1383 15.3657 10.6343L18.2929 7.7071C18.6834 7.31658 18.6834 6.68341 18.2929 6.29289L15.3657 3.36568C14.8617 2.86171 14 3.21864 14 3.93137Z"
      />
      <path
        fill="currentColor"
        d="M10 16V13.9311C10 13.2184 9.13829 12.8615 8.63431 13.3654L5.70711 16.2927C5.31658 16.6832 5.31658 17.3163 5.70711 17.7069L8.63432 20.6341C9.13829 21.138 10 20.7811 10 20.0684V18H17C19.7614 18 22 15.7614 22 13V9C22 8.44772 21.5523 8 21 8C20.4477 8 20 8.44772 20 9V13C20 14.6569 18.6569 16 17 16H10Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgRepeat)
