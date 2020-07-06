import React from 'react'

function SvgTablet(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 2a2 2 0 012 2v1H7v14h10v-5h2v6a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2h10zm.475 6.112l1.413 1.412L10.412 18H9v-1.413l8.475-8.475zm3.532-2.12a1 1 0 010 1.413l-1.413 1.413-1.412-1.413 1.412-1.413a1 1 0 011.413 0z"
      />
    </svg>
  )
}

export default SvgTablet
