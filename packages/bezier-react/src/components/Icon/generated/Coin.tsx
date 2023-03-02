import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCoin(props: SVGProps<SVGSVGElement>) {
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
        d="M4 12c0 4.411 3.589 8 8 8s8-3.589 8-8-3.589-8-8-8-8 3.589-8 8Zm-2 0C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10S2 17.514 2 12Zm10.492-1.056 1.115.444c1.104.444 1.763 1.187 1.763 2.447 0 1.227-.86 2.32-2.37 2.668V17a1 1 0 1 1-2 0v-.474c-.856-.17-1.7-.56-2.37-1.18l1.21-1.476c.637.54 1.464.912 2.172.912.792 0 1.163-.3 1.163-.779 0-.48-.427-.66-1.107-.944l-.152-.064-1.14-.48c-.935-.37-1.81-1.15-1.81-2.446 0-1.155.802-2.126 2.034-2.514V7a1 1 0 1 1 2 0v.45c.773.15 1.526.515 2.107 1.096L14.039 9.89c-.588-.444-1.14-.684-1.835-.684-.66 0-1.068.264-1.068.744 0 .466.504.662 1.229.946l.127.05Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCoin)
