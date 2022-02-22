import * as React from 'react'
import { SVGProps } from 'react'

function SvgShuffleIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M15.041 8h3.752l-1.829 1.83 1.414 1.413 3.183-3.182a1.504 1.504 0 0 0 0-2.122l-3.183-3.182-1.414 1.414 1.83 1.83H15.04c-.978 0-1.897.478-2.458 1.28l-5.805 8.292a1.002 1.002 0 0 1-.82.427H2v2h3.958a3 3 0 0 0 2.458-1.28l5.806-8.294a1 1 0 0 1 .82-.426Zm-8.263.426 1.586 2.266 1.221-1.744L8.416 7.28A3.001 3.001 0 0 0 5.959 6H2v2h3.959a1 1 0 0 1 .819.426Zm10.187 5.745 1.414-1.414 3.182 3.182a1.501 1.501 0 0 1 0 2.121l-3.182 3.182-1.414-1.414L18.794 18h-3.752a3.004 3.004 0 0 1-2.458-1.28l-1.168-1.669 1.22-1.744 1.587 2.266a1 1 0 0 0 .819.427h3.752l-1.83-1.829Z"
      />
    </svg>
  )
}

export default SvgShuffleIcon
