import React from 'react'

function SvgSecurityPerson(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 5.222L12 2 3 5.222V9.85a12 12 0 005.935 10.355L12 22l3.065-1.795A12 12 0 0021 9.85V5.222zM5 6.63l7-2.506 7 2.507v3.22l-.005.321a10 10 0 01-4.941 8.307L12 19.682l-2.054-1.203-.275-.167A10 10 0 015 9.85V6.63zm7 3.87a2 2 0 100-4 2 2 0 000 4zm4 4.239a.252.252 0 01-.254.261H8.254A.252.252 0 018 14.739 4.005 4.005 0 0112 11a4.004 4.004 0 014 3.739z"
      />
    </svg>
  )
}

export default SvgSecurityPerson
