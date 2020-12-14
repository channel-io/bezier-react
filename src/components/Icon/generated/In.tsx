import React from 'react'

function SvgIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.672 16.121L12.792 13H2v-2h10.794L9.672 7.878l1.414-1.414 4.475 4.475a1.5 1.5 0 010 2.121l-4.475 4.475-1.414-1.414zM12 4h8v16h-8v2h9a1 1 0 001-1V3a1 1 0 00-1-1h-9v2z"
      />
    </svg>
  )
}

export default SvgIn
