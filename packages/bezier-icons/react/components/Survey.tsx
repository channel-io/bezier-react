import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgSurvey(props: SVGProps<SVGSVGElement>) {
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
        d="M8 3C8 2.44772 8.44772 2 9 2H15C15.5523 2 16 2.44772 16 3H17C18.6569 3 20 4.34315 20 6V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V6C4 4.34315 5.34315 3 7 3H8ZM9 6C8.44772 6 8 5.55228 8 5H7C6.44772 5 6 5.44772 6 6V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V6C18 5.44772 17.5523 5 17 5H16C16 5.55228 15.5523 6 15 6H9ZM8 12H16V10H8V12ZM8 16H16V14H8V16Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgSurvey)
