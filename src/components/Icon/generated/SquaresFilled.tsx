import React from 'react'

function SvgSquaresFilled(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 7v11h11v2.5a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-13a.5.5 0 01.5-.5H6zm14.5-4a.5.5 0 01.5.5v12a.5.5 0 01-.5.5h-12a.5.5 0 01-.5-.5v-12a.5.5 0 01.5-.5h12z"
      />
    </svg>
  )
}

export default SvgSquaresFilled
