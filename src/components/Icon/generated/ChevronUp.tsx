import React from 'react'

function SvgChevronUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.95 15.565l-1.37-1.457 7.39-6.892a1.5 1.5 0 012.047 0l7.39 6.892-1.37 1.457-7.043-6.559-7.044 6.56z"
      />
    </svg>
  )
}

export default SvgChevronUp
