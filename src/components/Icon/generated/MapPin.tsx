import React from 'react'

function SvgMapPin(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12.5 12.732a3.214 3.214 0 110-6.428 3.214 3.214 0 010 6.428zm6.256-7.4a7.54 7.54 0 00-12.513 0c-1.76 2.573-1.597 6.013.146 8.599l5.667 8.408a.534.534 0 00.888 0l5.666-8.408c1.743-2.586 1.908-6.026.146-8.599z"
      />
    </svg>
  )
}

export default SvgMapPin
