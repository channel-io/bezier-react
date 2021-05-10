import React from 'react'

function SvgMetro(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        <path
          fill="currentColor"
          d="M7.5 13a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM15 14.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 2a4 4 0 014 4v12a1 1 0 01-1 1h-3l2.146 2.146a.5.5 0 01-.353.854h-2.379a1 1 0 01-.707-.293L13 19h-2l-2.707 2.707a1 1 0 01-.707.293H5.207a.5.5 0 01-.353-.854L7 19H4a1 1 0 01-1-1V6a4 4 0 014-4h10zm2 4v4h-6V4h4l.15.005A2 2 0 0119 6zm-8-2H7a2 2 0 00-1.995 1.85L5 6v4h6V4zM5 17h14v-5H5v5z"
        />
      </g>
    </svg>
  )
}

export default SvgMetro
