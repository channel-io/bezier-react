import React from 'react'

function SvgAppPush(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3v2H6.927A1.927 1.927 0 005 6.927v10.146C5 18.137 5.863 19 6.927 19h10.146A1.927 1.927 0 0019 17.073V12h2v5.073A3.928 3.928 0 0117.073 21H6.927A3.927 3.927 0 013 17.073V6.927A3.928 3.928 0 016.927 3H12zm5.501-1a4.5 4.5 0 11-.001 9 4.5 4.5 0 01.002-9z"
      />
    </svg>
  )
}

export default SvgAppPush
