import React from 'react'

function SvgTransfer(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.328 12.05l1.414 1.414L6.207 16H20v2H6.207l2.535 2.535-1.414 1.414L3.44 18.06a1.5 1.5 0 010-2.12l3.89-3.89zm9.344-10l3.889 3.89a1.5 1.5 0 010 2.12l-3.89 3.89-1.413-1.414L17.793 8H4V6h13.793l-2.535-2.537 1.414-1.413z"
      />
    </svg>
  )
}

export default SvgTransfer
