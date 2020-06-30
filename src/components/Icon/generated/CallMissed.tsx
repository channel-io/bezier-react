import React from 'react'

function SvgCallMissed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 2v2H6.451L12 9.55l6.256-6.257 1.414 1.414-6.633 6.633a18.38 18.38 0 019.884 3.559l.404.297c.19.14.232.41.09.602l-1.411 1.917-.157.212a1.874 1.874 0 01-2.403.534l-2.297-1.251a1.873 1.873 0 01-.976-1.644V13.72a16.386 16.386 0 00-8.341-.001v1.847c0 .685-.375 1.316-.977 1.644l-2.297 1.25a1.871 1.871 0 01-2.403-.533l-1.57-2.13a.43.43 0 01.092-.601l.4-.295a18.384 18.384 0 019.887-3.561L5 5.378V9H3V4l.005-.15A2.001 2.001 0 015 2h5z"
      />
    </svg>
  )
}

export default SvgCallMissed
