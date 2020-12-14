import React from 'react'

function SvgButtonRoute(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <g fill="currentColor">
        <path
          fill="currentColor"
          d="M4 9v7h3v2H3.5A1.5 1.5 0 012 16.5V3h2v4h3v2H4zM9.5 4A1.5 1.5 0 008 5.5v4A1.5 1.5 0 009.5 11h11A1.5 1.5 0 0022 9.5v-4A1.5 1.5 0 0020.5 4h-11zM9.5 13A1.5 1.5 0 008 14.5v4A1.5 1.5 0 009.5 20h11a1.5 1.5 0 001.5-1.5v-4a1.5 1.5 0 00-1.5-1.5h-11z"
        />
      </g>
    </svg>
  )
}

export default SvgButtonRoute
