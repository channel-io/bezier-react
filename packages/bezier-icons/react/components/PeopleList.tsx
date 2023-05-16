import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgPeopleList(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 7A2 2 0 1 0 5 3 2 2 0 0 0 5 7Zm-2 9h1v4a1 1 0 1 0 2 0v-4h1V9a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v7Zm7-11a1 1 0 0 0 1 1h9a1 1 0 1 0 0-2h-9a1 1 0 0 0-1 1Zm0 7a1 1 0 0 0 1 1h9a1 1 0 1 0 0-2h-9a1 1 0 0 0-1 1Zm1 8a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2h-9Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgPeopleList)
