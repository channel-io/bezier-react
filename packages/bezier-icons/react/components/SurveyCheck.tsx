import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgSurveyCheck(props: SVGProps<SVGSVGElement>) {
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
        d="M9 2C8.44772 2 8 2.44772 8 3H7C5.34315 3 4 4.34315 4 6V19C4 20.6569 5.34315 22 7 22H17C18.6569 22 20 20.6569 20 19V15.5H18V19C18 19.5523 17.5523 20 17 20H7C6.44772 20 6 19.5523 6 19V6C6 5.44772 6.44772 5 7 5H8C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5H17C17.5523 5 18 5.44772 18 6V7.5H20V6C20 4.34315 18.6569 3 17 3H16C16 2.44772 15.5523 2 15 2H9ZM14.154 16.068L10 12.08L11.385 10.636L14.169 13.309L19.82 8L21.189 9.457L14.154 16.068Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgSurveyCheck)
