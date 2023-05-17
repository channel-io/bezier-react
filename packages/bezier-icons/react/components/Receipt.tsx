import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgReceipt(props: SVGProps<SVGSVGElement>) {
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
        d="M15.997 19.882L13.994 18.882L11.995 19.882L9.995 18.882L7.997 19.882L7 19.383V4.001L17 4V19.382L15.997 19.882ZM5 20.617L7.997 22.118L9.995 21.118L11.995 22.118L13.995 21.118L15.997 22.118L19 20.618V3.501C19 2.673 18.329 2.001 17.5 2.001L6.5 2C5.672 2 5 2.672 5 3.5V20.617ZM15 10H9V12H15V10ZM9 14H15V16H9V14ZM15 6H9V8H15V6Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgReceipt)
