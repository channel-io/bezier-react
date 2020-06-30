import React from 'react'

function SvgPersonBlocked(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 12a5 5 0 110 10 5 5 0 010-10zm-7.516 0c1.183 0 2.302.264 3.312.726A5.968 5.968 0 0011.812 20H2.007a.503.503 0 01-.506-.524A8 8 0 019.484 12zM19.7 15.715L15.715 19.7c.391.187.823.301 1.285.301 1.654 0 3-1.346 3-3 0-.462-.114-.894-.3-1.285zM17 14c-1.654 0-3 1.346-3 3 0 .462.113.894.301 1.285l3.984-3.984a2.95 2.95 0 00-1.285-.3zM9.484 4a3.5 3.5 0 110 7 3.5 3.5 0 010-7z"
      />
    </svg>
  )
}

export default SvgPersonBlocked
