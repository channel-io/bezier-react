import React from 'react'

function SvgNoteLogo(props: React.SVGProps<SVGSVGElement>) {
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
        d="M17.715 18.715H6.29l.002-9.982c0-.094.036-.205.084-.257.948-1.05 1.92-2.108 2.888-3.15a.342.342 0 01.202-.098h8.25v13.487zM20 4.089c0-.63-.513-1.143-1.143-1.143h-9.89c-.44 0-.782.15-1.077.476l-3.444 3.75A1.576 1.576 0 004 8.318c.003.433.004 11.418.004 11.54 0 .63.513 1.143 1.142 1.143h13.711c.63 0 1.143-.513 1.143-1.142V4.088zM7.66 9.983c0 .504.41.913.914.913h2.47a.914.914 0 00.913-.913V7.512a.914.914 0 00-1.828 0v1.557H8.574a.915.915 0 00-.914.914z"
      />
    </svg>
  )
}

export default SvgNoteLogo
