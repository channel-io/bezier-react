import React from 'react'

function SvgBoolean(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12.464 4.464A4.985 4.985 0 0116 3a5 5 0 11-3.536 1.464zm5.657 1.414A2.981 2.981 0 0016.001 5c-.802 0-1.556.312-2.123.878A2.985 2.985 0 0013 8c0 .801.312 1.555.878 2.121a2.982 2.982 0 002.122.88c.801 0 1.555-.313 2.121-.88.567-.566.88-1.32.88-2.12 0-.802-.313-1.556-.88-2.123zm-6.585 13.658a5 5 0 01-7.071 0 5 5 0 010-7.071 5 5 0 117.07 7.07z"
      />
    </svg>
  )
}

export default SvgBoolean
