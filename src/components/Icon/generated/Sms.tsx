import React from 'react'

function SvgSms(props: React.SVGProps<SVGSVGElement>) {
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
        d="M5 2a2 2 0 00-2 2v16a2 2 0 002 2h8a2 2 0 002-2v-3h-2v2H5V5h8v2h2V4a2 2 0 00-2-2H5zm6.5 8a1 1 0 011-1H16a1 1 0 011 1v5h-1.25v-4.5h-.875V15h-1.25v-4.5h-.875V15H11.5v-5zM6 10a1 1 0 011-1h3.5v1.5h-3v1h2a1 1 0 011 1V14a1 1 0 01-1 1H6v-1.5h3v-1H7a1 1 0 01-1-1V10zm13-1a1 1 0 00-1 1v1.5a1 1 0 001 1h2v1h-3V15h3.5a1 1 0 001-1v-1.5a1 1 0 00-1-1h-2v-1h3V9H19z"
      />
    </svg>
  )
}

export default SvgSms
