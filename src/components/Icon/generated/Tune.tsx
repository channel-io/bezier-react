import * as React from 'react'
import { SVGProps } from 'react'

function SvgTune(props: SVGProps<SVGSVGElement>) {
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
        d="M16 6c-.55 0-1-.449-1-1 0-.55.45-1 1-1 .551 0 1 .45 1 1 0 .551-.449 1-1 1Zm2.816-2A2.995 2.995 0 0 0 16 2a2.993 2.993 0 0 0-2.815 2H3v2h10.184A2.996 2.996 0 0 0 16 8a2.995 2.995 0 0 0 2.816-2H21V4h-2.184ZM8 13c-.55 0-1-.449-1-1 0-.55.45-1 1-1 .551 0 1 .45 1 1 0 .551-.449 1-1 1Zm0-4a2.993 2.993 0 0 0-2.815 2H3v2h2.184A2.996 2.996 0 0 0 8 15a2.995 2.995 0 0 0 2.816-2H21v-2H10.816A2.995 2.995 0 0 0 8 9Zm7 10c0 .551.45 1 1 1 .551 0 1-.449 1-1 0-.55-.449-1-1-1-.55 0-1 .45-1 1Zm-1.815-1A2.993 2.993 0 0 1 16 16c1.302 0 2.402.838 2.816 2H21v2h-2.184A2.995 2.995 0 0 1 16 22a2.996 2.996 0 0 1-2.816-2H3v-2h10.185Z"
      />
    </svg>
  )
}

export default SvgTune
