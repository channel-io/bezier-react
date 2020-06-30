import React from 'react'

function SvgHelpFilled(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-.059 13.685a1.243 1.243 0 100 2.486 1.243 1.243 0 000-2.486zm.057-9.66c-2.083 0-3.841 1.585-3.841 3.46h1.9c0-.83.907-1.56 1.941-1.56.94 0 1.941.547 1.941 1.56 0 .509-.47.902-1.337 1.448-1.047.66-1.672 1.744-1.672 2.9v.708h1.9v-.708c0-.719.549-1.143.785-1.292.832-.523 2.225-1.402 2.225-3.055 0-1.941-1.688-3.462-3.842-3.462z"
      />
    </svg>
  )
}

export default SvgHelpFilled
