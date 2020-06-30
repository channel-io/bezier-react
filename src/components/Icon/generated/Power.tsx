import React from 'react'

function SvgPower(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.253 2.951C19.744 4.597 22 8.15 22 12.001c0 5.513-4.486 10-10 10S2 17.513 2 12c0-3.852 2.255-7.403 5.746-9.05L8.6 4.76C5.806 6.08 4 8.92 4 12c0 4.411 3.59 8 8 8 4.411 0 8-3.589 8-8a8.044 8.044 0 00-4.6-7.24l.853-1.809zM13 2v10h-2V2h2z"
      />
    </svg>
  )
}

export default SvgPower
