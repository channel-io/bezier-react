import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgSplitLeft(props: SVGProps<SVGSVGElement>) {
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
        d="M5.5 7C5.22386 7 5 7.22386 5 7.5V16.5C5 16.7761 5.22386 17 5.5 17H12.5C12.7761 17 13 16.7761 13 16.5V7.5C13 7.22386 12.7761 7 12.5 7H5.5Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 7C2 5.34315 3.34315 4 5 4H19C20.6569 4 22 5.34315 22 7V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V7ZM5 6H19C19.5523 6 20 6.44771 20 7V17C20 17.5523 19.5523 18 19 18H5C4.44772 18 4 17.5523 4 17V7C4 6.44772 4.44772 6 5 6Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgSplitLeft)
