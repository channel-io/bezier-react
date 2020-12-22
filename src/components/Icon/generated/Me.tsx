import React from 'react'

function SvgMe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 8.5a.5.5 0 01-.5.5H16v2h2.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H16v2h3.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1zm-7 8a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-5.702l-2.063 3.057a.5.5 0 01-.843-.023L6 10.335V16.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5l1.222.002a.5.5 0 01.424.236l2.352 3.802 2.356-3.802a.498.498 0 01.424-.237H12.5a.5.5 0 01.5.5v9zM20 5H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2z"
      />
    </svg>
  )
}

export default SvgMe
