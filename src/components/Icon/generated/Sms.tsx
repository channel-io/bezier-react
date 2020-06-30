import React from 'react'

function SvgSms(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 2a2 2 0 012 2v3h-2V5H5v14h8v-2h2v3a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2h8zm3 7a1 1 0 011 1v5h-1.25v-4.5h-.875V15h-1.25v-4.5h-.875V15H11.5v-5a1 1 0 011-1H16zm-5.5 0v1.5h-3v1h2a1 1 0 011 1V14a1 1 0 01-1 1H6v-1.5h3v-1H7a1 1 0 01-1-1V10a1 1 0 011-1h3.5zm12 0v1.5h-3v1h2a1 1 0 011 1V14a1 1 0 01-1 1H18v-1.5h3v-1h-2a1 1 0 01-1-1V10a1 1 0 011-1h3.5z"
      />
    </svg>
  )
}

export default SvgSms
