import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgRealtime(props: SVGProps<SVGSVGElement>) {
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
        d="M12 20c-4.41 0-8-3.589-8-8 0-4.41 3.59-8 8-8 1.846 0 3.542.634 4.897 1.688l-.69.691c-2.75-2.06-6.677-1.848-9.177.651l1.061 1.061c1.913-1.912 4.887-2.119 7.04-.636l-.763.763a4.44 4.44 0 0 0-3.366-.574 4.463 4.463 0 0 0-2.16 1.197l1.06 1.06a2.954 2.954 0 0 1 1.434-.794 2.924 2.924 0 0 1 1.918.225l-.742.742A1.967 1.967 0 0 0 12 10a2 2 0 1 0 2 2c0-.178-.03-.347-.074-.51l4.386-4.386A7.948 7.948 0 0 1 20 12c0 4.411-3.589 8-8 8Zm0-18C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgRealtime)
