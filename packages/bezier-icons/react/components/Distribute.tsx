import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgDistribute(props: SVGProps<SVGSVGElement>) {
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
        d="M17 10.069V8h-1.078a3 3 0 0 0-2.342 1.126l-1.598 1.998c-.266.332-.57.626-.904.876.333.25.638.544.904.877l1.598 1.997A3 3 0 0 0 15.922 16H17v-2.068a.8.8 0 0 1 1.366-.566l2.927 2.927a1 1 0 0 1 0 1.414l-2.927 2.928A.8.8 0 0 1 17 20.069V18h-1.078a5 5 0 0 1-3.904-1.877l-1.598-1.997A3 3 0 0 0 8.078 13H3a1 1 0 1 1 0-2h5.078a3 3 0 0 0 2.342-1.126l1.598-1.997A5 5 0 0 1 15.922 6H17V3.931a.8.8 0 0 1 1.366-.565l2.927 2.927a1 1 0 0 1 0 1.414l-2.927 2.927A.8.8 0 0 1 17 10.07Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgDistribute)
