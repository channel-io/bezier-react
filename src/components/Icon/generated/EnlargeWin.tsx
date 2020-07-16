import React from 'react'

function SvgEnlargeWin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="#A7A7AA"
        fillRule="evenodd"
        d="M17 7v10H7V7h10zm-1 1H8v8h8V8z"
      />
    </svg>
  )
}

export default SvgEnlargeWin
