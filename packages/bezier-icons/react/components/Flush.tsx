import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgFlush(props: SVGProps<SVGSVGElement>) {
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
        d="M12 7.413 9.88 9.535 8.465 8.121 10.587 6 8.465 3.88l1.414-1.415L12 4.585l2.12-2.12 1.415 1.413L13.415 6l2.12 2.122-1.413 1.414L12 7.413ZM7 7a1 1 0 0 0-2 0v11a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V7a1 1 0 1 0-2 0v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgFlush)
