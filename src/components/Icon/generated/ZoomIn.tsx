import React from 'react'

function SvgZoomIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 2c4.411 0 8 3.59 8 8a7.948 7.948 0 01-1.688 4.897L22.414 21 21 22.414l-6.103-6.102A7.946 7.946 0 0110 18c-4.41 0-8-3.589-8-8 0-4.41 3.59-8 8-8zm0 2c-3.309 0-6 2.691-6 6 0 3.31 2.691 6 6 6 3.31 0 6-2.69 6-6 0-3.309-2.69-6-6-6zm1 2v3h3v2h-3v3H9v-3H6V9h3V6h2z"
      />
    </svg>
  )
}

export default SvgZoomIn
