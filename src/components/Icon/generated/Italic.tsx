import React from 'react'

function SvgItalic(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <g fill="currentColor">
        <path
          fill="currentColor"
          d="M14 6.5A1.75 1.75 0 1014 3a1.75 1.75 0 000 3.5zM10 8h5l-3.294 10.706A1 1 0 0012.662 20H13v1H8l3.294-10.706A1 1 0 0010.338 9H10V8z"
        />
      </g>
    </svg>
  )
}

export default SvgItalic
