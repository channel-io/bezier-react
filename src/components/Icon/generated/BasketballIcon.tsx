import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgBasketballIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M12 2A9.965 9.965 0 0 0 5.21 4.66a10.058 10.058 0 0 0-1.334 1.51A9.955 9.955 0 0 0 2 12c0 2.175.695 4.189 1.875 5.83a10.053 10.053 0 0 0 1.334 1.51A9.965 9.965 0 0 0 12.001 22c5.522 0 10-4.477 10-10S17.523 2 12 2Zm-7.938 9a7.954 7.954 0 0 1 1.313-3.485A6.97 6.97 0 0 1 6.929 11H4.062Zm2.646-5a8.965 8.965 0 0 1 2.237 5H11V4.062A7.969 7.969 0 0 0 6.708 6Zm-2.646 7H6.93a6.97 6.97 0 0 1-1.554 3.485A7.953 7.953 0 0 1 4.062 13Zm4.883 0a8.965 8.965 0 0 1-2.236 5A7.969 7.969 0 0 0 11 19.938V13H8.945ZM13 4.062V11h2.055a8.966 8.966 0 0 1 2.237-5A7.968 7.968 0 0 0 13 4.062Zm5.626 3.452A6.97 6.97 0 0 0 17.07 11h2.868a7.953 7.953 0 0 0-1.313-3.486ZM15.055 13H13v6.938A7.968 7.968 0 0 0 17.292 18a8.965 8.965 0 0 1-2.237-5Zm3.57 3.485A6.97 6.97 0 0 1 17.072 13h2.868a7.954 7.954 0 0 1-1.313 3.485Z"
      />
    </svg>
  )
}

export default createIcon(SvgBasketballIcon)
