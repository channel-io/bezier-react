import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgShuffle(props: SVGProps<SVGSVGElement>) {
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
        d="M17 10.069V8h-.917a3 3 0 0 0-2.458 1.28l-4.611 6.587A5 5 0 0 1 4.917 18H3a1 1 0 1 1 0-2h1.917a3 3 0 0 0 2.458-1.28l4.611-6.587A5 5 0 0 1 16.084 6H17V3.931a.8.8 0 0 1 1.366-.565l2.927 2.927a1 1 0 0 1 0 1.414l-2.927 2.927A.8.8 0 0 1 17 10.07Z"
      />
      <path
        fill="currentColor"
        d="m9.014 8.133.876 1.251-1.221 1.744L7.375 9.28A3 3 0 0 0 4.917 8H3a1 1 0 1 1 0-2h1.917a5 5 0 0 1 4.097 2.133ZM11.986 15.867l-.876-1.251 1.221-1.744 1.294 1.848A3 3 0 0 0 16.083 16H17v-2.068a.8.8 0 0 1 1.366-.566l2.927 2.927a1 1 0 0 1 0 1.414l-2.927 2.928A.8.8 0 0 1 17 20.069V18h-.917a5 5 0 0 1-4.096-2.133Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgShuffle)
