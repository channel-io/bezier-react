import React from 'react'

function SvgCancelCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2c-4.41 0-8 3.59-8 8 0 4.411 3.59 8 8 8 4.411 0 8-3.589 8-8 0-4.41-3.589-8-8-8zm3.44 3.144l1.417 1.415-3.441 3.442 3.44 3.44-1.415 1.417L12 13.416l-3.44 3.44-1.416-1.416 3.44-3.44-3.441-3.44 1.416-1.417 3.44 3.442 3.442-3.442z"
      />
    </svg>
  )
}

export default SvgCancelCircle
