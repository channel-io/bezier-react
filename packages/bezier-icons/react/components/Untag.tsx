import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgUntag(props: SVGProps<SVGSVGElement>) {
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
        d="m10.048 19.606 3.572-3.572 1.414 1.414-3.926 3.926a1.49 1.49 0 0 1-1.06.44c-.402 0-.778-.157-1.06-.44l-6.362-6.362a1.501 1.501 0 0 1 0-2.12l3.926-3.926 1.414 1.414-3.572 3.572 5.654 5.654Zm.332-11.64L14.346 4H20v5.654l-3.966 3.966-5.654-5.654Zm7.068 7.068L22 10.482V2h-8.482L8.966 6.552 4.914 2.5A1 1 0 1 0 3.5 3.914L20.086 20.5a1 1 0 0 0 1.414-1.414l-4.052-4.052Zm1.167-8.005a1.5 1.5 0 1 1-2.999.002 1.5 1.5 0 0 1 2.999-.002Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgUntag)
