import React from 'react'

function SvgWater(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.11 10.065l-5.665-8.409A.532.532 0 0012 1.42a.532.532 0 00-.444.236L5.89 10.065c-1.743 2.586-1.907 6.026-.146 8.599 1.52 2.221 3.889 3.332 6.257 3.332s4.736-1.111 6.256-3.332c1.762-2.573 1.597-6.013-.146-8.599z"
      />
    </svg>
  )
}

export default SvgWater
