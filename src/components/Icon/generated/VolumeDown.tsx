import React from 'react'

function SvgVolumeDown(props: React.SVGProps<SVGSVGElement>) {
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
        d="M13 2l-.131.009a1 1 0 00-.576.284L7.585 7H3a1 1 0 00-1 1v8l.007.117A1 1 0 003 17h4.586l4.707 4.707A1 1 0 0013 22h1a1 1 0 001-1V3a1 1 0 00-1-1h-1zm0 2.414v15.171l-4.293-4.292-.099-.087A1 1 0 008 15H4V9h4a1 1 0 00.707-.293L13 4.414zm6.417 11.648a6.004 6.004 0 00-.176-8.307L17.827 9.17l.151.16a4.004 4.004 0 01-.15 5.502l1.413 1.414.176-.183z"
      />
    </svg>
  )
}

export default SvgVolumeDown
