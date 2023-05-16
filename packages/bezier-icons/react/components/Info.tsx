import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgInfo(props: SVGProps<SVGSVGElement>) {
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
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-14A1.5 1.5 0 1 1 12.002 9 1.5 1.5 0 0 1 12 6Zm1 12h-2v-8h2v8Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgInfo)
