import React from 'react'

function SvgSnooze(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.05 2.393L2.808 6.636 1.393 5.222 5.636.979 7.05 2.393zM18.364.98l4.243 4.243-1.415 1.414-4.242-4.243L18.364.98zM4 13a8 8 0 1016 0 8 8 0 00-16 0zm8-10C6.477 3 2 7.477 2 13s4.477 10 10 10 10-4.477 10-10S17.523 3 12 3zm-1 10.538V7h2v5.316l3.53 1.807-.912 1.78L11 13.538z"
      />
    </svg>
  )
}

export default SvgSnooze
