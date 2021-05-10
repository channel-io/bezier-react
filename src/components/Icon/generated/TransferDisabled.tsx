import React from 'react'

function SvgTransferDisabled(props: React.SVGProps<SVGSVGElement>) {
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
        d="M2.107 3.514L3.521 2.1l3.9 3.9H17V2.966a.4.4 0 01.683-.283l3.963 3.963a.5.5 0 010 .708l-3.963 3.963a.4.4 0 01-.683-.283V8H9.421l12.485 12.485-1.414 1.414-3.9-3.899-2-2L2.108 3.514zM13.18 16H7v-3.034a.4.4 0 00-.683-.283l-3.963 3.963a.5.5 0 000 .707l3.963 3.964A.4.4 0 007 21.034V18h8.179l-2-2z"
      />
    </svg>
  )
}

export default SvgTransferDisabled
