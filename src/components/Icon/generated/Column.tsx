import React from 'react'

function SvgColumn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 6h-4v12h4V6zm2 0v12h3a1 1 0 001-1V7a1 1 0 00-1-1h-3zM5 6h3v12H5a1 1 0 01-1-1V7a1 1 0 011-1zm0-2a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3H5z"
      />
    </svg>
  )
}

export default SvgColumn
