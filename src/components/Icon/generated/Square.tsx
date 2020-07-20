import React from 'react'

function SvgSquare(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <rect
        fill="currentColor"
        width={18}
        height={18}
        x={3}
        y={3}
        fillRule="evenodd"
        rx={1}
      />
    </svg>
  )
}

export default SvgSquare
