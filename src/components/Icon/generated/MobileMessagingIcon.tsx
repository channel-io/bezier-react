import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgMobileMessagingIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M16.25 13.187c3.452 0 6.25-2.398 6.25-5.357s-2.798-5.357-6.25-5.357S10 4.87 10 7.83c0 1.793 1.028 3.38 2.605 4.352-.21.69-.552 1.317-.802 1.723-.114.185.032.421.244.373.64-.145 1.728-.486 2.7-1.247.48.102.985.156 1.503.156Zm0-4.464a.896.896 0 0 1-.893-.893c0-.491.402-.893.893-.893.492 0 .893.402.893.893a.896.896 0 0 1-.893.893Zm-2.678 0a.896.896 0 0 1-.893-.893c0-.491.402-.893.893-.893s.893.402.893.893a.895.895 0 0 1-.893.893Zm4.464-.893c0 .491.402.893.893.893a.896.896 0 0 0 .893-.893.895.895 0 0 0-.893-.893.896.896 0 0 0-.893.893ZM16 21.967c.55.037 1-.415 1-.967V18.618a1 1 0 0 0-.553-.894l-2.7-1.35a1 1 0 0 0-1.248.294l-1.428 1.904a13.057 13.057 0 0 1-5.643-5.643l1.904-1.428a1 1 0 0 0 .295-1.247l-1.35-2.701A1 1 0 0 0 5.381 7H3c-.552 0-1.003.45-.967 1C2.526 15.488 8.513 21.474 16 21.967Z"
      />
    </svg>
  )
}

export default createIcon(SvgMobileMessagingIcon)
