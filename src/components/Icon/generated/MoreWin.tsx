import React from 'react'

function SvgMoreWin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        d="M6 12h2v2H6zm10 0h2v2h-2zm-5 0h2v2h-2z"
        fill="#A7A7AA"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgMoreWin
