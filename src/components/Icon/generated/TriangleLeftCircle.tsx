import React from 'react'

function SvgTriangleLeftCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2c-4.41 0-8 3.59-8 8 0 4.411 3.59 8 8 8 4.411 0 8-3.589 8-8 0-4.41-3.589-8-8-8zm1.63 3.421a.3.3 0 01.492.23v8.72a.3.3 0 01-.492.23l-5.23-4.36a.299.299 0 010-.461z"
      />
    </svg>
  )
}

export default SvgTriangleLeftCircle
