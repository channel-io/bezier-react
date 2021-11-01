import React from 'react'

function SvgData(props: React.SVGProps<SVGSVGElement>) {
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
        d="M18 5H6a1 1 0 00-1 1v1h14V6a1 1 0 00-1-1zM3 7v11a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6a3 3 0 00-3 3v1zm16 2H5v4h14V9zM5 15v3a1 1 0 001 1h12a1 1 0 001-1v-3H5zm1-4a1 1 0 112 0 1 1 0 01-2 0zm1 5a1 1 0 100 2 1 1 0 000-2z"
      />
    </svg>
  )
}

export default SvgData
