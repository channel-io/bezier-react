import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCheckAll(props: SVGProps<SVGSVGElement>) {
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
        d="M23.297 5.703a.994.994 0 0 0-1.405 0L11.367 16.228l-4.294-4.294a.993.993 0 0 0-1.405 1.404l4.991 4.993a1 1 0 0 0 1.415 0L23.297 7.109a.994.994 0 0 0 0-1.406Z"
      />
      <path
        fill="currentColor"
        d="M18.332 5.703a.994.994 0 0 0-1.406 0l-6.264 6.265a.993.993 0 1 0 1.405 1.405l6.265-6.264a.994.994 0 0 0 0-1.406ZM.703 13.339a.993.993 0 0 1 1.405-1.405l4.997 4.997A.993.993 0 1 1 5.7 18.336L.703 13.339Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCheckAll)
