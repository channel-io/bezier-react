import React from 'react'

function SvgCredit(props: React.SVGProps<SVGSVGElement>) {
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
        d="M21 9a6 6 0 00-6-6H9a6 6 0 00-6 6v6a6 6 0 006 6h6a6 6 0 006-6V9zM9 5h6l.2.005A4 4 0 0119 9v6l-.005.2A4 4 0 0115 19H9l-.2-.005A4 4 0 015 15V9l.005-.2A4 4 0 019 5zm3 3c1.487 0 2.784.811 3.474 2.015l-1.737.993a2 2 0 100 1.984l1.737.993A4 4 0 1112 8z"
      />
    </svg>
  )
}

export default SvgCredit
