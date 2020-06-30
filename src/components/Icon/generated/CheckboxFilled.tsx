import React from 'react'

function SvgCheckboxFilled(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 3a4 4 0 014 4v10c0 2.21-1.79 4-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm0 4.446l-6.14 6.14L8 10.726l-1.414 1.413 4.274 4.276 7.554-7.555L17 7.446z"
      />
    </svg>
  )
}

export default SvgCheckboxFilled
