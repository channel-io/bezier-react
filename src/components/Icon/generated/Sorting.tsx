import React from 'react'

function SvgSorting(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.016 6h-18V4h18v2zm-2.001 11.792l2.535-2.535 1.414 1.414-3.89 3.89a1.494 1.494 0 01-1.06.438c-.384 0-.768-.146-1.06-.439l-3.89-3.889 1.415-1.414 2.536 2.537.004-7.795 2 .001-.004 7.792zM3 13h11v-2H3v2zm7.016 7h-7v-2h7v2z"
      />
    </svg>
  )
}

export default SvgSorting
