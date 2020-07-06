import React from 'react'

function SvgApps(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 13a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6a1 1 0 011-1zm10 0a1 1 0 011 1v6a1 1 0 01-1 1h-6a1 1 0 01-1-1v-6a1 1 0 011-1zM9 15H5v4h4v-4zm10 0h-4v4h4v-4zM10 3a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm10 0a1 1 0 011 1v6a1 1 0 01-1 1h-6a1 1 0 01-1-1V4a1 1 0 011-1zM9 5H5v4h4V5zm10 0h-4v4h4V5z"
      />
    </svg>
  )
}

export default SvgApps
