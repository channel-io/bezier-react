import React from 'react'

function SvgSingleNode(props: React.SVGProps<SVGSVGElement>) {
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
        d="M2 5a3 3 0 015.83-1H10a3 3 0 013 3v10a1 1 0 001 1h2.17a3.001 3.001 0 110 2H14a3 3 0 01-3-3V7a1 1 0 00-1-1H7.83A3.001 3.001 0 012 5z"
      />
    </svg>
  )
}

export default SvgSingleNode
