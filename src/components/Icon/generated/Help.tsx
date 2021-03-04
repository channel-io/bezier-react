import React from 'react'

function SvgHelp(props: React.SVGProps<SVGSVGElement>) {
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12C2 6.476 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 10-16 0 8 8 0 0016 0zm-9.067 2.492h1.901v-.708c0-.719.548-1.143.784-1.292.833-.523 2.225-1.401 2.225-3.055 0-1.94-1.687-3.462-3.841-3.462-2.083 0-3.842 1.586-3.842 3.462h1.9c0-.831.907-1.56 1.942-1.56.94 0 1.94.546 1.94 1.56 0 .508-.47.901-1.337 1.448-1.047.66-1.672 1.743-1.672 2.899v.708zm1.011 3.632a1.243 1.243 0 10.002-2.486 1.243 1.243 0 00-.002 2.486z"
      />
    </svg>
  )
}

export default SvgHelp
