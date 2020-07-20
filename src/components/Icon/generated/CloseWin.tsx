import React from 'react'

function SvgCloseWin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.5 6.793l.707.707-4.5 4.5 4.5 4.5-.707.707-4.5-4.5-4.5 4.5-.707-.707 4.5-4.5-4.5-4.5.707-.707 4.5 4.5 4.5-4.5z"
      />
    </svg>
  )
}

export default SvgCloseWin
