import React from 'react'

function SvgTablet(props: React.SVGProps<SVGSVGElement>) {
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
          d="M7 2a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2v-8l-2 2v5H7V5h12V4a2 2 0 00-2-2H7z"
        />
        <path
          fill="currentColor"
          d="M10.412 17H9v-1.413l7.475-7.475 1.413 1.412L10.412 17zM17.182 7.405l1.412 1.413 1.414-1.413a1 1 0 00-1.414-1.413l-1.412 1.413z"
        />
      </g>
    </svg>
  )
}

export default SvgTablet
