import React from 'react'

function SvgChevronUpDouble(props: React.SVGProps<SVGSVGElement>) {
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
          d="M4.35 17.24a1 1 0 101.3 1.52L12 13.316l6.35 5.442a1 1 0 101.3-1.518l-7-6a1 1 0 00-1.3 0l-7 6z"
        />
        <path
          fill="currentColor"
          d="M4.35 9.24a1 1 0 101.3 1.52L12 5.316l6.35 5.442a1 1 0 101.3-1.518l-7-6a1 1 0 00-1.3 0l-7 6z"
        />
      </g>
    </svg>
  )
}

export default SvgChevronUpDouble
