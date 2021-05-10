import React from 'react'

function SvgChevronLeftDouble(props: React.SVGProps<SVGSVGElement>) {
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
          d="M17.24 19.65a1 1 0 101.52-1.3L13.316 12l5.442-6.35a1 1 0 10-1.518-1.3l-6 7a1 1 0 000 1.3l6 7z"
        />
        <path
          fill="currentColor"
          d="M9.24 19.65a1 1 0 101.52-1.3L5.316 12l5.442-6.35a1 1 0 10-1.518-1.3l-6 7a1 1 0 000 1.3l6 7z"
        />
      </g>
    </svg>
  )
}

export default SvgChevronLeftDouble
