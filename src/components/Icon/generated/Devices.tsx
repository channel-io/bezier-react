import React from 'react'

function SvgDevices(props: React.SVGProps<SVGSVGElement>) {
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
        d="M3.506 5h17c.827 0 1.5.673 1.5 1.5V9h-2V7h-16v10.023l10.006.058-.012 2-14-.08.012-2 1.994.011V6.5c0-.827.673-1.5 1.5-1.5zm16.5 15h-3v-8h3v8zm-4.5-10h6a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-6a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5z"
      />
    </svg>
  )
}

export default SvgDevices
