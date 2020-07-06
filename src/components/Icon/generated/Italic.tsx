import React from 'react'

function SvgItalic(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15 8l-3.294 10.706A1 1 0 0012.662 20H13v1H8l3.294-10.706A1 1 0 0010.338 9H10V8h5zm-1-5a1.75 1.75 0 110 3.5A1.75 1.75 0 0114 3z"
      />
    </svg>
  )
}

export default SvgItalic
