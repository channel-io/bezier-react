import React from 'react'

function SvgUpload(props: React.SVGProps<SVGSVGElement>) {
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
        d="M13 5.207l3.121 3.121 1.414-1.414L13.06 2.44a1.5 1.5 0 00-2.12 0L6.463 6.914l1.414 1.414L11 5.207V16h2V5.207zM4 20v-8H2v9a1 1 0 001 1h18a1 1 0 001-1v-9h-2v8H4z"
      />
    </svg>
  )
}

export default SvgUpload
