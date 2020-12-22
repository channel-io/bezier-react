import React from 'react'

function SvgRotate(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.003 2.218a9.933 9.933 0 00-7.027 2.889l-2.119-2.12a.5.5 0 00-.854.354v5.627a.5.5 0 00.5.5H8.13a.5.5 0 00.353-.854L6.39 6.52a7.944 7.944 0 015.613-2.303c4.411 0 8 3.589 8 8 0 4.41-3.589 8-8 8-4.41 0-8-3.59-8-8h-2c0 5.514 4.486 10 10 10s10-4.486 10-10-4.486-10-10-10z"
      />
    </svg>
  )
}

export default SvgRotate
