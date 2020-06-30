import React from 'react'

function SvgView(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.22 9.397a4.108 4.108 0 11-.001 8.215 4.108 4.108 0 01.002-8.215zm-10.102 3.04c4.574-8.583 15.631-8.583 20.206 0l-1.765.941c-3.822-7.17-12.855-7.17-16.676 0z"
      />
    </svg>
  )
}

export default SvgView
