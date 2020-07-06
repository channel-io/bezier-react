import React from 'react'

function SvgRuler(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.758 20.485l-4.244-4.243 1.416-1.414 2.12 2.121 1.414-1.414-2.12-2.12L7.756 12l1.415 1.414L10.585 12l-1.414-1.414 1.415-1.415 1.415 1.414 1.414-1.414L12 7.757l1.414-1.415 2.12 2.122L16.95 7.05l-2.121-2.122 1.413-1.414 4.243 4.243L7.758 20.485zM22.252 6.696l-4.95-4.949a1.491 1.491 0 00-1.06-.44h-.002c-.4.001-.777.157-1.059.44L1.748 15.182a1.501 1.501 0 000 2.121l4.949 4.95a1.5 1.5 0 002.122 0L22.252 8.818a1.502 1.502 0 000-2.122z"
      />
    </svg>
  )
}

export default SvgRuler
