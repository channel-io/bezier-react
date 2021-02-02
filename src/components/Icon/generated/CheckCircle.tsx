import React from 'react'

function SvgCheckCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 10-16 0 8 8 0 0016 0zm-12.029-.776l2.783 2.672 5.651-5.31 1.37 1.458-7.035 6.61-4.154-3.987 1.385-1.443z"
      />
    </svg>
  )
}

export default SvgCheckCircle
