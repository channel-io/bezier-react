import React from 'react'

function SvgPersonCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2c5.515 0 10 4.486 10 10s-4.485 10-10 10C6.488 22 2 17.514 2 12S6.488 2 12 2zm0 12.296c-2.245 0-4.202 1.455-4.761 3.537l-.13.483a7.943 7.943 0 009.781 0l-.13-.483c-.558-2.082-2.516-3.537-4.76-3.537zM12 4c-4.41 0-8 3.589-8 8 0 1.753.574 3.371 1.534 4.691.994-2.612 3.55-4.395 6.467-4.395s5.473 1.784 6.466 4.395A7.948 7.948 0 0020 12c0-4.411-3.59-8-8-8zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0 2c-.55 0-1 .45-1 1 0 .551.45 1 1 1 .551 0 1-.449 1-1 0-.55-.449-1-1-1z"
      />
    </svg>
  )
}

export default SvgPersonCircle
