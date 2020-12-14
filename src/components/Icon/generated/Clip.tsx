import React from 'react'

function SvgClip(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.78 12.78l-6.245 6.244a5 5 0 01-7.07-7.07l7.075-7.077a2.992 2.992 0 114.233 4.232l-7.16 7.159a1.005 1.005 0 11-1.423-1.422l6.327-6.328-1.414-1.414-6.327 6.327a3.005 3.005 0 000 4.252 3.005 3.005 0 004.252-.001l7.16-7.159a4.993 4.993 0 10-7.062-7.06L5.05 10.54a7 7 0 009.9 9.9l6.243-6.245-1.414-1.414z"
      />
    </svg>
  )
}

export default SvgClip
