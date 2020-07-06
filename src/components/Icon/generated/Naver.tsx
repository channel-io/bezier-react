import React from 'react'

function SvgNaver(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2c5.522 0 10 4.478 10 10s-4.478 10-10 10C6.477 22 2 17.522 2 12S6.477 2 12 2zm1.47 5.5l-.01 4.49-3.087-4.482H7v9.016h3.374l.02-4.475 3.03 4.475h3.396V7.508L13.47 7.5z"
      />
    </svg>
  )
}

export default SvgNaver
