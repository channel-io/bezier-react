import React from 'react'

function SvgSend(props: React.SVGProps<SVGSVGElement>) {
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
        d="M8.391 13.007l8.836-.017-10.35 5.976 1.514-5.96zm8.862-2.018l-8.857.018-1.478-5.984 10.335 5.966zm4.72.994v-.002-.004a1.007 1.007 0 00-.07-.341l-.034-.08a.99.99 0 00-.19-.28l-.004-.003a.975.975 0 00-.203-.157l-15.588-9a.997.997 0 00-1.1.068.998.998 0 00-.37 1.039l2.168 8.782-2.228 8.767a1 1 0 001.47 1.112l15.648-9.035a.991.991 0 00.431-.522c.04-.11.07-.224.07-.344z"
      />
    </svg>
  )
}

export default SvgSend
