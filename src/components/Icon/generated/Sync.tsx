import React from 'react'

function SvgSync(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 12c0 5.514-4.486 10-10 10a9.933 9.933 0 01-7.027-2.889L2.854 21.23A.5.5 0 012 20.877V15.25a.5.5 0 01.5-.5h5.627a.5.5 0 01.353.854l-2.093 2.093A7.946 7.946 0 0012 20c4.411 0 8-3.589 8-8h2zM12 2a9.933 9.933 0 017.027 2.889l2.12-2.119a.5.5 0 01.853.353V8.75a.5.5 0 01-.5.5h-5.627a.5.5 0 01-.353-.854l2.093-2.093A7.948 7.948 0 0012 4c-4.41 0-8 3.589-8 8H2C2 6.486 6.486 2 12 2z"
      />
    </svg>
  )
}

export default SvgSync
