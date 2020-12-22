import React from 'react'

function SvgChannelFilled(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.213 14.065c-.845 0-1.198-.61-1.198-2.105s.353-2.105 1.198-2.105 1.198.61 1.198 2.105-.353 2.105-1.198 2.105zm-6.427 0c-.845 0-1.198-.61-1.198-2.105s.353-2.105 1.198-2.105 1.198.61 1.198 2.105-.353 2.105-1.198 2.105zm12.008 4.317a2.49 2.49 0 01.142-1.91 9.944 9.944 0 00.985-5.735c-.558-4.486-4.176-8.113-8.664-8.66a10.007 10.007 0 00-11.18 11.18c.547 4.488 4.174 8.107 8.66 8.664a9.94 9.94 0 005.735-.984 2.492 2.492 0 011.91-.143l2.037.679a.833.833 0 001.054-1.054l-.679-2.037z"
      />
    </svg>
  )
}

export default SvgChannelFilled
