import React from 'react'

function SvgNote(props: React.SVGProps<SVGSVGElement>) {
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
        d="M4.5 21h7.292c.398 0 .78-.158 1.061-.44l7.708-7.707a1.5 1.5 0 00.44-1.06V4.5A1.5 1.5 0 0019.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21zm.5-2V5h14v6h-6.5a1.5 1.5 0 00-1.5 1.5V19H5zm8-1.415L17.586 13H13v4.585z"
      />
    </svg>
  )
}

export default SvgNote
