import React from 'react'

function SvgCheckBold(props: React.SVGProps<SVGSVGElement>) {
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
        d="M10 14.264l7.425-7.425a1 1 0 011.414 0l.707.707a1 1 0 010 1.414L10 18.506 4.454 12.96a1 1 0 010-1.414l.707-.707a1 1 0 011.414 0L10 14.264z"
      />
    </svg>
  )
}

export default SvgCheckBold
