import React from 'react'

function SvgFullscreen(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 10h2V4.5c0-.827-.673-1.5-1.5-1.5H14v2h5v5zm-5 11h5.5c.827 0 1.5-.673 1.5-1.5V14h-2v5h-5v2zm-4 0H4.5c-.827 0-1.5-.673-1.5-1.5V14h2v5h5v2zM3 10h2V5h5V3H4.5C3.673 3 3 3.673 3 4.5V10z"
      />
    </svg>
  )
}

export default SvgFullscreen
