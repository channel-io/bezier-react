import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgItalicIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M14 6.5A1.75 1.75 0 1 0 14 3a1.75 1.75 0 0 0 0 3.5ZM10 8h5l-3.294 10.706A1 1 0 0 0 12.662 20H13v1H8l3.294-10.706A1 1 0 0 0 10.338 9H10V8Z"
      />
    </svg>
  )
}

export default createIcon(SvgItalicIcon)
