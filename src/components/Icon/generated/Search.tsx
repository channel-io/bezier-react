import React from 'react'

function SvgSearch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 2a8 8 0 016.32 12.905L22.415 21 21 22.414l-6.095-6.093A8.001 8.001 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z"
      />
    </svg>
  )
}

export default SvgSearch
