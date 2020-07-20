import React from 'react'

function SvgHexahedron(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          fill="currentColor"
          d="M13 2.577l7 4.042c.619.357 1 1.017 1 1.732v8.083a2 2 0 01-1 1.732l-7 4.041a1.996 1.996 0 01-2 0l-7-4.041a2 2 0 01-1-1.732V8.35c0-.715.381-1.375 1-1.732l7-4.042a2.001 2.001 0 012 0zm-1 1.605L4.89 8.287v8.21L12 20.604l7.11-4.105v-8.21L12 4.181z"
        />
        <path
          fill="currentColor"
          d="M19.502 7.133l.996 1.734L13 13.177v8.22h-2v-8.219L3.502 8.867l.996-1.734L12 11.445l7.502-4.312z"
        />
      </g>
    </svg>
  )
}

export default SvgHexahedron
