import React from 'react'

function SvgDialogDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 18a1 1 0 001-1V5a1 1 0 112 0v12a3 3 0 01-3 3H6a3 3 0 01-3-3V5a1 1 0 112 0v12a1 1 0 001 1h12z"
      />
      <path
        fill="currentColor"
        d="M18 16a1 1 0 01-1 1H7a1 1 0 01-1-1v-4a1 1 0 011-1h10a1 1 0 011 1v4z"
      />
    </svg>
  )
}

export default SvgDialogDown
