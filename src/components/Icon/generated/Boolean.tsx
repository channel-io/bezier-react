import React from 'react'

function SvgBoolean(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.465 12.465a4.998 4.998 0 017.07 0 4.998 4.998 0 010 7.07 4.996 4.996 0 01-7.07 0 4.996 4.996 0 010-7.07zM16 3a5 5 0 11-.001 10A5 5 0 0116 3zm0 2c-.8 0-1.555.312-2.122.878A2.987 2.987 0 0013 8c0 .801.312 1.555.878 2.121.567.567 1.321.88 2.122.88.801 0 1.555-.313 2.121-.88.567-.566.88-1.32.88-2.12 0-.802-.313-1.556-.88-2.123A2.98 2.98 0 0016.001 5z"
      />
    </svg>
  )
}

export default SvgBoolean
