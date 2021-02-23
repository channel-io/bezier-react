import React from 'react'

function SvgSync(props: React.SVGProps<SVGSVGElement>) {
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
        d="M15.873 9.25H21.5a.5.5 0 00.5-.5V3.123a.5.5 0 00-.854-.353l-2.119 2.119A9.933 9.933 0 0012 2C6.486 2 2 6.486 2 12h2c0-4.411 3.59-8 8-8 2.117 0 4.106.819 5.613 2.303L15.52 8.396a.5.5 0 00.353.854zm-7.746 5.5H2.5a.5.5 0 00-.5.5v5.627a.5.5 0 00.854.353l2.12-2.119A9.93 9.93 0 0012 22c5.514 0 10-4.486 10-10h-2c0 4.411-3.589 8-8 8a7.946 7.946 0 01-5.613-2.303l2.093-2.093a.5.5 0 00-.353-.854z"
      />
    </svg>
  )
}

export default SvgSync
