import React from 'react'

function SvgKeyboard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.5 5c.827 0 1.5.673 1.5 1.5v11c0 .827-.673 1.5-1.5 1.5h-17c-.827 0-1.5-.673-1.5-1.5v-11C2 5.673 2.673 5 3.5 5zM20 7H4v10h16V7zm-4 7.02V16H8v-1.98h8zM8 11v2H6v-2h2zm10 0v2h-2v-2h2zm-6.667 0v2h-2v-2h2zm3.333 0v2h-2v-2h2zM8 8v2H6V8h2zm10 0v2h-2V8h2zm-6.667 0v2h-2V8h2zm3.333 0v2h-2V8h2z"
      />
    </svg>
  )
}

export default SvgKeyboard
