import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowLeft(props: SVGProps<SVGSVGElement>) {
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
        d="M12.267 20.742a1 1 0 0 0 .044-1.413L6.363 13H20a1 1 0 1 0 0-2H6.389l5.922-6.302a1 1 0 0 0-1.458-1.37l-7.196 7.658a1.5 1.5 0 0 0 0 2.055l7.196 7.657a1 1 0 0 0 1.414.044Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowLeft)
