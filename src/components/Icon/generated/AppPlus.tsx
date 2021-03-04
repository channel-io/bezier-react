import React from 'react'

function SvgAppPlus(props: React.SVGProps<SVGSVGElement>) {
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
        d="M16 6V3h2v3h3v2h-3v3h-2V8h-3V6h3zm3 6v5.073A1.928 1.928 0 0117.073 19H6.927A1.927 1.927 0 015 17.073V6.927C5 5.863 5.863 5 6.927 5H12V3H6.927A3.927 3.927 0 003 6.927v10.146A3.927 3.927 0 006.927 21h10.146A3.928 3.928 0 0021 17.073V12h-2z"
      />
    </svg>
  )
}

export default SvgAppPlus
