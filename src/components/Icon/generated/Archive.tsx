import React from 'react'

function SvgArchive(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.5 3c.827 0 1.5.673 1.5 1.5V9h-1.006v10.5c0 .827-.673 1.5-1.5 1.5h-15c-.827 0-1.5-.673-1.5-1.5V9H2V4.5C2 3.673 2.673 3 3.5 3zm-1.506 6h-14v10h14V9zm-4.5 2v2h-5v-2h5zM20 5H4v2h16V5z"
      />
    </svg>
  )
}

export default SvgArchive
