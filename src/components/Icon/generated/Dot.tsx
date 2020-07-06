import React from 'react'

function SvgDot(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 12a5 5 0 11-10.001-.001A5 5 0 0117 12"
      />
    </svg>
  )
}

export default SvgDot
