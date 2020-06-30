import React from 'react'

function SvgFolder(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.746 3c.573 0 1.087.319 1.343.832l.56 1.125H20.5c.827 0 1.5.673 1.5 1.5V17.5c0 .827-.673 1.5-1.5 1.5h-17c-.827 0-1.5-.673-1.5-1.5v-13C2 3.673 2.673 3 3.5 3h6.246zM20 10H4v7h16v-7zM9.436 5H4v3h16V6.957h-9.59L9.436 5z"
      />
    </svg>
  )
}

export default SvgFolder
