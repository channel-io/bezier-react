import React from 'react'

function SvgUntag(props: React.SVGProps<SVGSVGElement>) {
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
        d="M2.793 3.207l18 18 1.414-1.414-4.759-4.759L22 10.482V2h-8.482L8.966 6.552l-4.759-4.76-1.414 1.415zm7.587 4.76l5.654 5.653L20 9.654V4h-5.654L10.38 7.966zm-.332 11.64l3.572-3.573 1.414 1.414-3.926 3.926a1.49 1.49 0 01-1.06.44c-.402 0-.778-.157-1.06-.44l-6.362-6.362a1.501 1.501 0 010-2.12l3.926-3.926 1.414 1.414-3.572 3.572 5.654 5.654zm8.567-12.578a1.5 1.5 0 11-2.999.002 1.5 1.5 0 012.999-.002z"
      />
    </svg>
  )
}

export default SvgUntag
