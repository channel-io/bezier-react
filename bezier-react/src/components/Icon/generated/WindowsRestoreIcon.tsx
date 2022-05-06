import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgWindowsRestoreIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M16 8h-6v1h5v5h1V8Zm-1 7v2H7V9h2V7h8v8h-2Zm-7-5h6v6H8v-6Z"
      />
    </svg>
  )
}

export default createIcon(SvgWindowsRestoreIcon)
