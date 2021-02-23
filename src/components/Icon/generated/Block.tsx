import React from 'react'

function SvgBlock(props: React.SVGProps<SVGSVGElement>) {
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
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-1.96 0A8.04 8.04 0 017.05 18.336L18.336 7.05A8.005 8.005 0 0120.039 12zM5.663 16.95L16.95 5.663A8.04 8.04 0 005.664 16.95z"
      />
    </svg>
  )
}

export default SvgBlock
