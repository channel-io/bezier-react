import React from 'react'

function SvgImage(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.5 3c.827 0 1.5.673 1.5 1.5v15c0 .827-.673 1.5-1.5 1.5h-15c-.827 0-1.5-.673-1.5-1.5v-15C3 3.673 3.673 3 4.5 3zM19 5H5v14h14V5zm-4.995 5L18 12v6H6v-4l8.005-4zM8 6a2 2 0 11-.001 4.001A2 2 0 018 6z"
      />
    </svg>
  )
}

export default SvgImage
