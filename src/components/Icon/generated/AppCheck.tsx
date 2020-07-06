import React from 'react'

function SvgAppCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3v2H6.927A1.929 1.929 0 005 6.927v10.146A1.93 1.93 0 006.927 19h10.146A1.93 1.93 0 0019 17.073V12h2v5.073A3.932 3.932 0 0117.073 21H6.927A3.932 3.932 0 013 17.073V6.927A3.931 3.931 0 016.927 3H12zm8.631.932L22 5.39 14.965 12l-4.154-3.988 1.385-1.444 2.784 2.673 5.651-5.309z"
      />
    </svg>
  )
}

export default SvgAppCheck
