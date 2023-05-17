import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgList(props: SVGProps<SVGSVGElement>) {
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
        d="M4.5 6.5C5.32843 6.5 6 5.82843 6 5C6 4.17157 5.32843 3.5 4.5 3.5C3.67157 3.5 3 4.17157 3 5C3 5.82843 3.67157 6.5 4.5 6.5Z"
      />
      <path
        fill="currentColor"
        d="M4.5 13.5C5.32843 13.5 6 12.8284 6 12C6 11.1716 5.32843 10.5 4.5 10.5C3.67157 10.5 3 11.1716 3 12C3 12.8284 3.67157 13.5 4.5 13.5Z"
      />
      <path
        fill="currentColor"
        d="M6 19C6 19.8284 5.32843 20.5 4.5 20.5C3.67157 20.5 3 19.8284 3 19C3 18.1716 3.67157 17.5 4.5 17.5C5.32843 17.5 6 18.1716 6 19Z"
      />
      <path
        fill="currentColor"
        d="M9 6C8.44772 6 8 5.55228 8 5C8 4.44772 8.44772 4 9 4H20C20.5523 4 21 4.44772 21 5C21 5.55228 20.5523 6 20 6H9Z"
      />
      <path
        fill="currentColor"
        d="M8 12C8 12.5523 8.44772 13 9 13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11H9C8.44772 11 8 11.4477 8 12Z"
      />
      <path
        fill="currentColor"
        d="M9 20C8.44772 20 8 19.5523 8 19C8 18.4477 8.44772 18 9 18H20C20.5523 18 21 18.4477 21 19C21 19.5523 20.5523 20 20 20H9Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgList)
