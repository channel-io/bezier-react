import React from 'react'

function SvgTag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.048 19.606L20 9.654V4h-5.654l-9.952 9.952 5.654 5.654zm-7.422-6.715l10.892-10.89H22v8.481L11.108 21.374a1.49 1.49 0 01-1.06.44c-.402 0-.778-.157-1.06-.44l-6.362-6.362a1.501 1.501 0 010-2.12zM18.615 7.03a1.5 1.5 0 11-2.999.002 1.5 1.5 0 012.999-.002z"
      />
    </svg>
  )
}

export default SvgTag
