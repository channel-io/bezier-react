import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgGraph(props: SVGProps<SVGSVGElement>) {
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
        d="M8.25 4C8.25 2.89543 9.14543 2 10.25 2H13.75C14.8546 2 15.75 2.89543 15.75 4V7H19.25C20.3546 7 21.25 7.89543 21.25 9V19C21.25 20.1046 20.3546 21 19.25 21H15H14.25H9.75H9H4.75C3.64543 21 2.75 20.1046 2.75 19V14C2.75 12.8954 3.64543 12 4.75 12H8.25V4ZM10.25 4V19H13.75V4H10.25ZM4.75 14V19H8.25V14H4.75ZM19.25 19H15.75V9H19.25V19Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgGraph)
