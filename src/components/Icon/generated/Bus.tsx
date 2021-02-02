import React from 'react'

function SvgBus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <g fill="currentColor">
        <path
          fill="currentColor"
          d="M6 14.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 13a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 2a4 4 0 014 4v15a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2H7v2a1 1 0 01-1 1H4a1 1 0 01-1-1V6a4 4 0 014-4h10zm2 4v4H5V6l.005-.15A2 2 0 017 4h10l.15.005A2 2 0 0119 6zm0 6H5v5h14v-5z"
        />
      </g>
    </svg>
  )
}

export default SvgBus
