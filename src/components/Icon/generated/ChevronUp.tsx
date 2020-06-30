import React from 'react'

function SvgChevronUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.95 16.565l-1.37-1.457 8.386-7.881a1.5 1.5 0 012.055 0l8.386 7.881-1.37 1.457-8.043-7.559-8.044 7.56z"
      />
    </svg>
  )
}

export default SvgChevronUp
