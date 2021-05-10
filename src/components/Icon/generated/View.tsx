import React from 'react'

function SvgView(props: React.SVGProps<SVGSVGElement>) {
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
        d="M20.559 13.378c-3.822-7.17-12.855-7.17-16.676 0l-1.765-.94c4.574-8.584 15.631-8.584 20.206 0l-1.765.94zM12.22 9.397a4.107 4.107 0 110 8.214 4.107 4.107 0 010-8.214z"
      />
    </svg>
  )
}

export default SvgView
