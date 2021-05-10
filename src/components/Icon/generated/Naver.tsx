import React from 'react'

function SvgNaver(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 2c5.522 0 10 4.478 10 10s-4.478 10-10 10C6.477 22 2 17.522 2 12S6.477 2 12 2zM7 7.508v9.015h3.374l.02-4.474 3.03 4.474h3.396V7.508L13.47 7.5l-.01 4.49-3.087-4.482H7zm-4.068 4.506l.001-.134v.268l-.001-.134zm9.292-8.995h-.583a9.16 9.16 0 01.583 0zm8.704 9.274v-.56a9.096 9.096 0 010 .56zM11.65 21.01h.563a9.46 9.46 0 01-.563 0z"
      />
    </svg>
  )
}

export default SvgNaver
