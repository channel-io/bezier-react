import React from 'react'

function SvgArrowDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.04 20.773l8.387-7.881-1.37-1.457L13 18.067V3h-2v15.042l-7.03-6.607-1.37 1.457 8.386 7.881a1.5 1.5 0 002.055 0z"
      />
    </svg>
  )
}

export default SvgArrowDown
