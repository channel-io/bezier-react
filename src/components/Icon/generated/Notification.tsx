import React from 'react'

function SvgNotification(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.002 2a6.144 6.144 0 016.144 6.144c0 1.555.436 3.08 1.259 4.4l2.352 3.776a1.1 1.1 0 01-.935 1.68l-4.82.001a4 4 0 01-8 0h-4.82a1.1 1.1 0 01-.932-1.685l2.35-3.77a8.348 8.348 0 001.257-4.402A6.145 6.145 0 0112.002 2zm2 16l-4 .001a2 2 0 004 0zm-2-14a4.144 4.144 0 00-4.145 4.144c0 1.929-.54 3.819-1.56 5.458L4.803 16h14.398l-1.494-2.398a10.325 10.325 0 01-1.56-5.458A4.147 4.147 0 0012.001 4z"
      />
    </svg>
  )
}

export default SvgNotification
