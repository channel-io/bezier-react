import React from 'react'

function SvgFullscreen(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21 14v5.5c0 .827-.673 1.5-1.5 1.5H14v-2h5v-5h2zM5 14v5h5v2H4.5c-.827 0-1.5-.673-1.5-1.5V14h2zM19.5 3c.827 0 1.5.673 1.5 1.5V10h-2V5h-5V3h5.5zM10 3v2H5v5H3V4.5C3 3.673 3.673 3 4.5 3H10z"
      />
    </svg>
  )
}

export default SvgFullscreen
