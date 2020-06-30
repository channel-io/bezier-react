import React from 'react'

function SvgPlus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 3v8h8v2h-8v8h-2v-8H3v-2h8V3h2z"
      />
    </svg>
  )
}

export default SvgPlus
