import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgTrendingRight(props: SVGProps<SVGSVGElement>) {
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
        d="m17.849 11.634-5.167-5.166a.4.4 0 0 0-.683.283v3.248H6.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H12v3.249a.4.4 0 0 0 .682.283l5.167-5.165a.518.518 0 0 0 0-.732Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgTrendingRight)
