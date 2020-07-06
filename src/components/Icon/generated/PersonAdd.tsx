import React from 'react'

function SvgPersonAdd(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.014 13a8 8 0 017.983 7.476.504.504 0 01-.506.524H3.537a.504.504 0 01-.506-.524A8 8 0 0111.014 13zm0-8a3.6 3.6 0 110 7.2 3.6 3.6 0 010-7.2zm8.984-2v3h3v2h-3v3h-2V8h-3V6h3V3h2z"
      />
    </svg>
  )
}

export default SvgPersonAdd
