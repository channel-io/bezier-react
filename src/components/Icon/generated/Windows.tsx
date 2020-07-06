import React from 'react'

function SvgWindows(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.223 12.455l9.777.041v8.538l-9.777-1.369v-7.21zM3 12.421l7.361.03v7.093l-7.36-1.031v-6.092zm7.361-7.883v7.08l-7.36.03V5.626l7.36-1.088zm10.64-1.572v8.607l-9.778.041V4.41L21 2.966z"
      />
    </svg>
  )
}

export default SvgWindows
