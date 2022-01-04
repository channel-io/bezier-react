import React from 'react'

function SvgQrCode(props: React.SVGProps<SVGSVGElement>) {
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
        d="M5 5h4v4H5V5zM3 5a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm2 10h4v4H5v-4zm-2 0a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4zM19 5h-4v4h4V5zm-4-2a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2V5a2 2 0 00-2-2h-4zm-.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm1 4a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm-1 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm3.5-3.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm1.5 3.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
      />
    </svg>
  )
}

export default SvgQrCode
