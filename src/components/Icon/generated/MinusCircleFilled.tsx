import React from 'react'

function SvgMinusCircleFilled(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.14 13h11.72v-2H6.14v2zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"
      />
    </svg>
  )
}

export default SvgMinusCircleFilled
