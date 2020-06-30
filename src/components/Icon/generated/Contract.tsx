import React from 'react'

function SvgContract(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.5 12c.827 0 1.5.673 1.5 1.5V19h-2v-3.59l-5.292 5.297-1.416-1.414L8.582 14H5v-2zm8.794-8.707l1.413 1.415L15.41 10H19v2h-5.5c-.827 0-1.5-.672-1.5-1.5V5h2v3.582l5.294-5.29z"
      />
    </svg>
  )
}

export default SvgContract
