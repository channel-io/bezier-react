import React from 'react'

function SvgInboxAll(props: React.SVGProps<SVGSVGElement>) {
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
        d="M19 7.5h-4.5a2.5 2.5 0 01-5 0H5V5h14v2.5zm0 7h-4.5a2.5 2.5 0 01-5 0H5V12h14v2.5zM19.5 3h-15C3.673 3 3 3.673 3 4.5v15c0 .827.673 1.5 1.5 1.5h15c.827 0 1.5-.673 1.5-1.5v-15c0-.827-.673-1.5-1.5-1.5z"
      />
    </svg>
  )
}

export default SvgInboxAll
