import React from 'react'

function SvgInfoFilled(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 9A1.5 1.5 0 1112 6 1.5 1.5 0 0112 9zm-1 9h2v-8h-2v8zm1-16C6.486 2 2 6.486 2 12s4.486 10 10 10c5.515 0 10-4.486 10-10S17.515 2 12 2z"
      />
    </svg>
  )
}

export default SvgInfoFilled
