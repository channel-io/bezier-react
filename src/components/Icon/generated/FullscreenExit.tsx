import React from 'react'

function SvgFullscreenExit(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21 14v2h-5v5h-2v-5.5c0-.827.673-1.5 1.5-1.5H21zM8.5 14c.827 0 1.5.673 1.5 1.5V21H8v-5H3v-2h5.5zM16 3v5h5v2h-5.5c-.827 0-1.5-.673-1.5-1.5V3h2zm-6 0v5.5c0 .827-.673 1.5-1.5 1.5H3V8h5V3h2z"
      />
    </svg>
  )
}

export default SvgFullscreenExit
