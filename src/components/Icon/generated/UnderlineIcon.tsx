import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgUnderlineIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M5 3v8.5a7 7 0 1 0 14 0V3h-3v8.5a4 4 0 0 1-8 0V3H5ZM21 21v-2H3v2h18Z"
      />
    </svg>
  )
}

export default createIcon(SvgUnderlineIcon)
