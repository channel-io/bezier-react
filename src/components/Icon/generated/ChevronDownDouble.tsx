import React from 'react'

function SvgChevronDownDouble(props: React.SVGProps<SVGSVGElement>) {
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
          d="M19.65 6.76a1 1 0 10-1.3-1.52L12 10.684 5.65 5.241a1 1 0 10-1.3 1.518l7 6a1 1 0 001.3 0l7-6z"
        />
        <path
          fill="currentColor"
          d="M19.65 14.76a1 1 0 10-1.3-1.52L12 18.684l-6.35-5.442a1 1 0 00-1.3 1.518l7 6a1 1 0 001.3 0l7-6z"
        />
      </g>
    </svg>
  )
}

export default SvgChevronDownDouble
