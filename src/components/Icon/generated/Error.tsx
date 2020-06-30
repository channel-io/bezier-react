import React from 'react'

function SvgError(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2c5.515 0 10 4.486 10 10s-4.485 10-10 10C6.486 22 2 17.514 2 12S6.486 2 12 2zm0 2c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm-.067 11.595a1.323 1.323 0 110 2.646 1.323 1.323 0 010-2.646zm1.214-9.615l-.133 8.007h-2.162L10.72 5.98h2.427z"
      />
    </svg>
  )
}

export default SvgError
