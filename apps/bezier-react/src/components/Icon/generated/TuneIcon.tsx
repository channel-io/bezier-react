import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgTuneIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M18.816 4A2.995 2.995 0 0 0 16 2a2.993 2.993 0 0 0-2.815 2H4a1 1 0 0 0 0 2h9.184A2.996 2.996 0 0 0 16 8a2.995 2.995 0 0 0 2.816-2H20a1 1 0 1 0 0-2h-1.184ZM16 6c-.55 0-1-.449-1-1 0-.55.45-1 1-1 .551 0 1 .45 1 1 0 .551-.449 1-1 1ZM8 9a2.993 2.993 0 0 0-2.815 2H4a1 1 0 1 0 0 2h1.184A2.996 2.996 0 0 0 8 15a2.995 2.995 0 0 0 2.816-2H20a1 1 0 1 0 0-2h-9.184A2.995 2.995 0 0 0 8 9Zm0 4c-.55 0-1-.449-1-1 0-.55.45-1 1-1 .551 0 1 .45 1 1 0 .551-.449 1-1 1ZM13.185 18A2.993 2.993 0 0 1 16 16c1.302 0 2.402.838 2.816 2H20a1 1 0 1 1 0 2h-1.184A2.995 2.995 0 0 1 16 22a2.996 2.996 0 0 1-2.816-2H4a1 1 0 1 1 0-2h9.185ZM15 19c0 .551.45 1 1 1 .551 0 1-.449 1-1 0-.55-.449-1-1-1-.55 0-1 .45-1 1Z"
      />
    </svg>
  )
}

export default createIcon(SvgTuneIcon)
