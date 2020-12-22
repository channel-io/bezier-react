import React from 'react'

function SvgPlus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 3h-2v8H3v2h8v8h2v-8h8v-2h-8V3z"
      />
    </svg>
  )
}

export default SvgPlus
