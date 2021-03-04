import React from 'react'

function SvgRefresh(props: React.SVGProps<SVGSVGElement>) {
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
        d="M20 12c0 4.411-3.589 8-8 8s-8-3.589-8-8 3.589-8 8-8c2.117 0 4.107.819 5.613 2.303L15.52 8.396a.5.5 0 00.353.854H21.5a.5.5 0 00.5-.5V3.123a.5.5 0 00-.854-.353l-2.119 2.119A9.933 9.933 0 0012 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10h-2z"
      />
    </svg>
  )
}

export default SvgRefresh
