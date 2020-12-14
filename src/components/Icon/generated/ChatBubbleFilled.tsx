import React from 'react'

function SvgChatBubbleFilled(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.723 18.19c-.166-.496-.147-1.046.1-1.507 1.038-1.949 1.458-4.274.964-6.729-.805-4-4.094-7.165-8.123-7.817A10.013 10.013 0 002.13 13.675c.653 4.028 3.817 7.316 7.818 8.121 2.456.494 4.782.072 6.731-.967.46-.245 1.003-.264 1.496-.1l1.923.641a1 1 0 001.264-1.265l-.638-1.915z"
      />
    </svg>
  )
}

export default SvgChatBubbleFilled
