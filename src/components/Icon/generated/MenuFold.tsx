import React from 'react'

function SvgMenuFold(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.016 6h18V4h-18v2zM3 13h9v-2H3v2zm9.016 7h-9v-2h9v2z"
      />
    </svg>
  )
}

export default SvgMenuFold
