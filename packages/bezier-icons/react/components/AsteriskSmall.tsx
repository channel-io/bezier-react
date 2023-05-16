import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgAsteriskSmall(props: SVGProps<SVGSVGElement>) {
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
        d="M12 5.5a1 1 0 0 1 1 1v3.768l3.263-1.884a1 1 0 1 1 1 1.732L14 12l3.263 1.884a1 1 0 1 1-1 1.732L13 13.732V17.5a1 1 0 1 1-2 0v-3.768l-3.263 1.884a1 1 0 1 1-1-1.732L10 12l-3.263-1.884a1 1 0 1 1 1-1.732L11 10.268V6.5a1 1 0 0 1 1-1Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgAsteriskSmall)
