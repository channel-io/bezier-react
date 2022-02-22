import * as React from 'react'
import { SVGProps } from 'react'

function SvgKeyIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M12.958 11.04a2.5 2.5 0 1 1 3.536-3.535 2.5 2.5 0 0 1-3.536 3.535Zm6.013-6.013a5.997 5.997 0 0 0-9.653 6.825L2 19.17V22h2.829l.707-.708V19.17h2.12l.708-.707v-2.12h2.122l1.66-1.662a5.998 5.998 0 0 0 6.825-1.167 6.001 6.001 0 0 0 0-8.486Z"
      />
    </svg>
  )
}

export default SvgKeyIcon
