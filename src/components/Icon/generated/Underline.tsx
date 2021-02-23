import React from 'react'

function SvgUnderline(props: React.SVGProps<SVGSVGElement>) {
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
          d="M5 3v8.5a7 7 0 1014 0V3h-3v8.5a4 4 0 01-8 0V3H5zM21 21v-2H3v2h18z"
        />
      </g>
    </svg>
  )
}

export default SvgUnderline
