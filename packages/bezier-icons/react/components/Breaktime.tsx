import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgBreaktime(props: SVGProps<SVGSVGElement>) {
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
        d="M14.997 5c-.53 0-.997.323-.997.692V6h-2v-.308C12 4.208 13.344 3 14.997 3c.531 0 .997-.324.997-.693V2h2v.307C17.994 3.792 16.65 5 14.997 5ZM20 12.822c.59-.284 1-.882 1-1.578V9h-1v3.822Zm-7 6.174c2.757 0 5-2.243 5-5v-5H6v5c0 2.757 2.243 5 5 5h2Zm7-12V7h2a1 1 0 0 1 1 1v3.244a3.758 3.758 0 0 1-3.07 3.687A6.978 6.978 0 0 1 17.885 19H20a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h2.115A6.975 6.975 0 0 1 4 13.996v-6a1 1 0 0 1 1-1h15Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgBreaktime)
