import React from 'react'

function SvgDot(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 12a5 5 0 11-10 0 5 5 0 0110 0z"
      />
    </svg>
  )
}

export default SvgDot
