import React from 'react'

function SvgSurvey(props: React.SVGProps<SVGSVGElement>) {
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
        d="M8 3a1 1 0 011-1h6a1 1 0 011 1h1a3 3 0 013 3v13a3 3 0 01-3 3H7a3 3 0 01-3-3V6a3 3 0 013-3h1zm1 3a1 1 0 01-1-1H7a1 1 0 00-1 1v13a1 1 0 001 1h10a1 1 0 001-1V6a1 1 0 00-1-1h-1a1 1 0 01-1 1H9zm-1 6h8v-2H8v2zm0 4h8v-2H8v2z"
      />
    </svg>
  )
}

export default SvgSurvey
