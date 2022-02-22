import * as React from 'react'
import { SVGProps } from 'react'

function SvgPageIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M5 20.5v-17A1.5 1.5 0 0 1 6.5 2h5.27c.44 0 .86.193 1.138.524l5.73 6.684a1.5 1.5 0 0 1 .362.977V20.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20.5Zm2-.5h10v-9h-4.615C11.62 11 11 10.38 11 9.615V4H7v16Zm8.825-11L13 5.704V9h2.825Z"
      />
    </svg>
  )
}

export default SvgPageIcon
