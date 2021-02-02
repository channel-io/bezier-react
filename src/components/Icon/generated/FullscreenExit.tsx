import React from 'react'

function SvgFullscreenExit(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5 10H21V8h-5V3h-2v5.5c0 .827.673 1.5 1.5 1.5zM14 21h2v-5h5v-2h-5.5c-.827 0-1.5.673-1.5 1.5V21zm-4 0H8v-5H3v-2h5.5c.827 0 1.5.673 1.5 1.5V21zM3 10h5.5c.827 0 1.5-.673 1.5-1.5V3H8v5H3v2z"
      />
    </svg>
  )
}

export default SvgFullscreenExit
