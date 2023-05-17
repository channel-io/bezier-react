import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCancelCircleFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M15.4406 16.8575L11.9996 13.4165L8.55961 16.8565L7.14361 15.4405L10.5836 12.0005L7.14261 8.55951L8.55861 7.14351L11.9996 10.5845L15.4406 7.14351L16.8566 8.55951L13.4156 12.0005L16.8566 15.4415L15.4406 16.8575ZM19.0796 4.91951C15.1856 1.02651 8.81461 1.02651 4.92061 4.91951C1.02661 8.81451 1.02661 15.1855 4.92061 19.0795C8.81461 22.9735 15.1856 22.9735 19.0796 19.0795C22.9736 15.1855 22.9736 8.81451 19.0796 4.91951Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCancelCircleFilled)
