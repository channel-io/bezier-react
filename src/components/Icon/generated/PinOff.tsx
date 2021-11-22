import React from 'react'

function SvgPinOff(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.384 10.988l-1.417 2.858 6.286 6.286-1.415 1.414L2.454 3.161l1.414-1.414 6.018 6.018 2.859-1.416 3.174-3.174 4.637 4.64-3.172 3.173zM7.049 9.17l7.513 7.513-.879 1.776 1.977 1.977-1.414 1.414-5.475-5.475-5.92 5.92-1.414-1.414 5.92-5.92-5.575-5.574 1.414-1.414 2.077 2.077 1.776-.88z"
      />
    </svg>
  )
}

export default SvgPinOff
