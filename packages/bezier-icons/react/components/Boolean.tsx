import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgBoolean(props: SVGProps<SVGSVGElement>) {
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
        d="M12.464 4.464A4.985 4.985 0 0 1 16 3a5 5 0 1 1-3.536 1.464Zm5.657 1.414A2.981 2.981 0 0 0 16.001 5c-.802 0-1.556.312-2.123.878A2.985 2.985 0 0 0 13 8c0 .801.312 1.555.878 2.121a2.982 2.982 0 0 0 2.122.88c.801 0 1.555-.313 2.121-.88.567-.566.88-1.32.88-2.12 0-.802-.313-1.556-.88-2.123Zm-6.585 13.658a5 5 0 0 1-7.071 0 5 5 0 0 1 0-7.071 5 5 0 1 1 7.07 7.07Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgBoolean)
