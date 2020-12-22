import React from 'react'

function SvgPlay(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.146 11.39a.75.75 0 010 1.22l-11.96 8.543A.75.75 0 017 20.543V3.457a.75.75 0 011.186-.61l11.96 8.543z"
      />
    </svg>
  )
}

export default SvgPlay
