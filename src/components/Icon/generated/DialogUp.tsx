import React from 'react'

function SvgDialogUp(props: React.SVGProps<SVGSVGElement>) {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 6a1 1 0 00-1 1v12a1 1 0 11-2 0V7a3 3 0 013-3h12a3 3 0 013 3v12a1 1 0 11-2 0V7a1 1 0 00-1-1H6z"
        />
        <path
          fill="currentColor"
          d="M6 8a1 1 0 011-1h10a1 1 0 011 1v4a1 1 0 01-1 1H7a1 1 0 01-1-1V8z"
        />
      </g>
    </svg>
  )
}

export default SvgDialogUp
