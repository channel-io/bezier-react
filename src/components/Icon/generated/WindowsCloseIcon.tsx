import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgWindowsCloseIcon(props: SVGProps<SVGSVGElement>) {
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
        d="m7.404 6.697-.707.707L11.293 12l-4.596 4.596.707.707L12 12.707l4.596 4.596.707-.707L12.707 12l4.596-4.596-.707-.707L12 11.293 7.404 6.697Z"
      />
    </svg>
  )
}

export default createIcon(SvgWindowsCloseIcon)
