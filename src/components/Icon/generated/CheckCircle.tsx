import React from 'react'

function SvgCheckCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 00-8 8 8 8 0 108-8zm4.405 4.586l1.37 1.458-7.035 6.61-4.154-3.987 1.385-1.443 2.783 2.672 5.651-5.31z"
      />
    </svg>
  )
}

export default SvgCheckCircle
