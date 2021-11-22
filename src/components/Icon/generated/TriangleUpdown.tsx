import React from 'react'

function SvgTriangleUpdown(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12.378 4.436a.5.5 0 00-.756 0l-4.46 5.15a.25.25 0 00.19.414h9.297a.25.25 0 00.189-.414l-4.46-5.15zM12.378 19.564a.5.5 0 01-.756 0l-4.46-5.15a.25.25 0 01.19-.414h9.297a.25.25 0 01.189.414l-4.46 5.15z"
      />
    </svg>
  )
}

export default SvgTriangleUpdown
