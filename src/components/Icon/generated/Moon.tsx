import React from 'react'

function SvgMoon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M9.778 2.899a1.56 1.56 0 01.26 1.605 7.255 7.255 0 009.459 9.459 1.56 1.56 0 011.604.259c.43.37.682 1.024.39 1.69A10.174 10.174 0 0112.171 22C6.554 22 2 17.446 2 11.828 2 7.661 4.505 4.082 8.087 2.51a1.444 1.444 0 011.691.389zM7.796 4.925a8.172 8.172 0 1011.28 11.28 9.255 9.255 0 01-11.28-11.28z"
      />
    </svg>
  )
}

export default SvgMoon
