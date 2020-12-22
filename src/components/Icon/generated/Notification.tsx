import React from 'react'

function SvgNotification(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.6 12.545a8.332 8.332 0 001.257-4.4 6.144 6.144 0 0112.29 0c0 1.554.435 3.078 1.258 4.4l2.352 3.775a1.1 1.1 0 01-.935 1.68h-4.82a4 4 0 11-8 0h-4.82a1.1 1.1 0 01-.932-1.684l2.35-3.77zM10.001 18a2 2 0 104 0h-4zm9.2-2l-1.495-2.398a10.324 10.324 0 01-1.56-5.458 4.144 4.144 0 10-8.29 0c0 1.929-.54 3.819-1.56 5.458L4.803 16h14.398z"
      />
    </svg>
  )
}

export default SvgNotification
