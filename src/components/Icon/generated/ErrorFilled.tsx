import React from 'react'

function SvgErrorFilled(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10c5.515 0 10-4.486 10-10S17.515 2 12 2zm-.067 13.595a1.322 1.322 0 10.001 2.645 1.322 1.322 0 000-2.645zm1.214-9.615l-.133 8.007h-2.162L10.72 5.98h2.427z"
      />
    </svg>
  )
}

export default SvgErrorFilled
