import React from 'react'

function SvgTune(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 6c-.55 0-1-.449-1-1 0-.55.45-1 1-1 .551 0 1 .45 1 1 0 .551-.449 1-1 1zm2.816-2A2.995 2.995 0 0016 2a2.993 2.993 0 00-2.815 2H3v2h10.184A2.996 2.996 0 0016 8a2.995 2.995 0 002.816-2H21V4h-2.184zM8 13c-.55 0-1-.449-1-1 0-.55.45-1 1-1 .551 0 1 .45 1 1 0 .551-.449 1-1 1zm0-4a2.993 2.993 0 00-2.815 2H3v2h2.184A2.996 2.996 0 008 15a2.995 2.995 0 002.816-2H21v-2H10.816A2.995 2.995 0 008 9zm7 10c0 .551.45 1 1 1 .551 0 1-.449 1-1 0-.55-.449-1-1-1-.55 0-1 .45-1 1zm-1.815-1A2.993 2.993 0 0116 16c1.302 0 2.402.838 2.816 2H21v2h-2.184A2.995 2.995 0 0116 22a2.996 2.996 0 01-2.816-2H3v-2h10.185z"
      />
    </svg>
  )
}

export default SvgTune
