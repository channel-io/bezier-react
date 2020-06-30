import React from 'react'

function SvgOut(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 4H4v16h8v2H3a1 1 0 01-1-1V3a1 1 0 011-1h9v2zm9.561 6.939a1.5 1.5 0 010 2.121l-4.475 4.475-1.414-1.414L18.793 13H8v-2h10.795l-3.123-3.122 1.414-1.414z"
      />
    </svg>
  )
}

export default SvgOut
