import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgSkip(props: SVGProps<SVGSVGElement>) {
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
        d="M15.5 11.4C15.9 11.7 15.9 12.3 15.5 12.6L5.49999 20.1C5.00556 20.4708 4.29999 20.118 4.29999 19.5L4.29999 4.5C4.29999 3.88197 5.00556 3.52918 5.49999 3.9L15.5 11.4Z"
      />
      <path
        fill="currentColor"
        d="M16.3 4.19998C16.3 3.86861 16.5686 3.59998 16.9 3.59998H19.1C19.4314 3.59998 19.7 3.8686 19.7 4.19998V19.8C19.7 20.1313 19.4314 20.4 19.1 20.4H16.9C16.5686 20.4 16.3 20.1313 16.3 19.8V4.19998Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgSkip)
