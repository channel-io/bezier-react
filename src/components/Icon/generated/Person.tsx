import React from 'react'

function SvgPerson(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 12c5.143 0 9.38 3.882 9.938 8.876A1.007 1.007 0 0120.944 22H3.056c-.6 0-1.06-.527-.994-1.124C2.622 15.882 6.857 12 12 12zm0 2a7.99 7.99 0 00-7.75 6h15.5A7.991 7.991 0 0012 14zm0-12a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 2c-1.379 0-2.5 1.122-2.5 2.5S10.621 9 12 9c1.378 0 2.5-1.122 2.5-2.5S13.378 4 12 4z"
      />
    </svg>
  )
}

export default SvgPerson
