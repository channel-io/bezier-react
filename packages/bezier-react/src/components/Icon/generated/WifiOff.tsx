import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgWifiOff(props: SVGProps<SVGSVGElement>) {
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
        d="M12.291 10.171a9.407 9.407 0 0 1 6.417 2.75l-1.833 1.832 5.378 5.38-1.414 1.413L2.454 3.161l1.414-1.414 3.804 3.804a14.594 14.594 0 0 1 4.331-.677c3.94 0 7.644 1.534 10.431 4.321l-2.122 2.121a11.675 11.675 0 0 0-8.309-3.442c-.627 0-1.243.06-1.85.158l2.138 2.14ZM5.297 12.92a9.416 9.416 0 0 1 3.348-2.153l2.45 2.45a6.446 6.446 0 0 0-3.677 1.824l-2.12-2.121Zm3.919 3.918 2.787 2.788 2.787-2.788a3.943 3.943 0 0 0-5.574 0ZM1.573 9.195A14.835 14.835 0 0 1 4.698 6.82l2.22 2.221a11.721 11.721 0 0 0-3.224 2.277L1.573 9.194Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgWifiOff)
