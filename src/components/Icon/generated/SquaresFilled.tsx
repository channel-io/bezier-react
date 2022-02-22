import * as React from 'react'
import { SVGProps } from 'react'

function SvgSquaresFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M8.5 16h12a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-12a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5Zm-5 5h13a.5.5 0 0 0 .5-.5V18H6V7H3.5a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5Z"
      />
    </svg>
  )
}

export default SvgSquaresFilled
