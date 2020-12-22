import React from 'react'

function SvgRow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 9H5V5h14v4zM4.5 11h15c.827 0 1.5-.673 1.5-1.5v-5c0-.827-.673-1.5-1.5-1.5h-15C3.673 3 3 3.673 3 4.5v5c0 .827.673 1.5 1.5 1.5zM19 19H5v-4h14v4zM4.5 21h15c.827 0 1.5-.673 1.5-1.5v-5c0-.827-.673-1.5-1.5-1.5h-15c-.827 0-1.5.673-1.5 1.5v5c0 .827.673 1.5 1.5 1.5z"
      />
    </svg>
  )
}

export default SvgRow
