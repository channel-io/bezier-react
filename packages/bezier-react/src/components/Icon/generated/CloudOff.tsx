import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgCloudOff(props: SVGProps<SVGSVGElement>) {
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
        d="M2.707 3.793a1 1 0 0 0 0 1.414l16.97 16.97a1 1 0 0 0 1.415-1.413l-2.102-2.102a6 6 0 0 0-1.792-11.659A5.997 5.997 0 0 0 12 4a5.993 5.993 0 0 0-4.996 2.676L4.121 3.793a1 1 0 0 0-1.414 0Zm5.754 4.34 8.855 8.855A4 4 0 0 0 17 9h-1.07l-.262-.6a4.001 4.001 0 0 0-7.207-.267Zm-3.736.592L6.5 10.5h-.25a3.25 3.25 0 0 0 0 6.5H13l2 2H6.25A5.25 5.25 0 0 1 4.725 8.725Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgCloudOff)
