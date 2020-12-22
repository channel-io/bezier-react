import React from 'react'

function SvgError(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12c0-5.514-4.485-10-10-10C6.486 2 2 6.486 2 12s4.486 10 10 10c5.515 0 10-4.486 10-10zM4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8zm7.933 3.595a1.322 1.322 0 10.001 2.645 1.322 1.322 0 000-2.645zm1.214-9.615l-.133 8.007h-2.162L10.72 5.98h2.427z"
      />
    </svg>
  )
}

export default SvgError
