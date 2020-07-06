import React from 'react'

function SvgMore(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.5 10C5.875 10 7 11.125 7 12.5c0 1.32-1.037 2.41-2.336 2.495L4.5 15C3.125 15 2 13.875 2 12.5S3.125 10 4.5 10zm7.5 0c1.375 0 2.5 1.125 2.5 2.5 0 1.32-1.037 2.41-2.336 2.495L12 15c-1.375 0-2.5-1.125-2.5-2.5S10.625 10 12 10zm7.5 0c1.375 0 2.5 1.125 2.5 2.5 0 1.32-1.037 2.41-2.336 2.495L19.5 15c-1.375 0-2.5-1.125-2.5-2.5s1.125-2.5 2.5-2.5z"
      />
    </svg>
  )
}

export default SvgMore
