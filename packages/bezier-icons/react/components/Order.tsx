import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgOrder(props: SVGProps<SVGSVGElement>) {
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
        d="M2 5C2 5.55228 2.44772 6 3 6H21C21.5523 6 22 5.55228 22 5C22 4.44772 21.5523 4 21 4H3C2.44772 4 2 4.44772 2 5Z"
      />
      <path
        fill="currentColor"
        d="M5 12C5 12.5523 5.44772 13 6 13H18C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11H6C5.44772 11 5 11.4477 5 12Z"
      />
      <path
        fill="currentColor"
        d="M16 19C16 19.5523 15.5523 20 15 20H9C8.44772 20 8 19.5523 8 19C8 18.4477 8.44772 18 9 18H15C15.5523 18 16 18.4477 16 19Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgOrder)
