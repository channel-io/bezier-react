import React from 'react'

function SvgWifi(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12.003 4.874c-3.94 0-7.645 1.534-10.43 4.321l2.12 2.121a11.679 11.679 0 018.31-3.442c3.14 0 6.09 1.223 8.31 3.442l2.121-2.121a14.652 14.652 0 00-10.43-4.321zM5.298 12.92l2.12 2.12a6.493 6.493 0 019.17 0l2.12-2.12c-3.697-3.697-9.713-3.696-13.41 0zm6.704 6.706l-2.787-2.788a3.943 3.943 0 015.575 0l-2.787 2.788z"
      />
    </svg>
  )
}

export default SvgWifi
