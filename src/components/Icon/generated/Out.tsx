import React from 'react'

function SvgOut(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.793 13l-3.121 3.121 1.414 1.414 4.475-4.475a1.5 1.5 0 000-2.121l-4.475-4.475-1.414 1.414L18.794 11H8v2h10.793zM4 4h8V2H3a1 1 0 00-1 1v18a1 1 0 001 1h9v-2H4V4z"
      />
    </svg>
  )
}

export default SvgOut
