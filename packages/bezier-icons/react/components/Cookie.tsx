import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCookie(props: SVGProps<SVGSVGElement>) {
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
        d="M4.00461 11.9996C4.00461 16.4106 7.59361 19.9996 12.0046 19.9996C16.4156 19.9996 20.0046 16.4106 20.0046 11.9996C20.0046 11.7696 19.9936 11.5386 19.9716 11.3026C16.1546 10.8926 13.1116 7.84963 12.7016 4.03263C12.4666 4.01063 12.2346 3.99963 12.0046 3.99963C7.59361 3.99963 4.00461 7.58863 4.00461 11.9996ZM21.6776 9.34963L21.8286 10.1666C21.9466 10.8016 22.0046 11.4016 22.0046 11.9996C22.0046 17.5136 17.5186 21.9996 12.0046 21.9996C6.49061 21.9996 2.00461 17.5136 2.00461 11.9996C2.00461 6.48563 6.49061 1.99963 12.0046 1.99963C12.5956 1.99963 13.2126 2.05963 13.8376 2.17463L14.6546 2.32663V3.15763C14.6576 6.56863 17.4356 9.34663 20.8466 9.34963H21.6776ZM10.0002 7.00012C10.9662 7.00012 11.7502 7.78312 11.7502 8.75012C11.7502 9.71612 10.9662 10.5001 10.0002 10.5001C9.03321 10.5001 8.25021 9.71612 8.25021 8.75012C8.25021 7.78312 9.03321 7.00012 10.0002 7.00012ZM15.0002 11.5001C14.0332 11.5001 13.2502 12.2831 13.2502 13.2501C13.2502 14.2161 14.0332 15.0001 15.0002 15.0001C15.9662 15.0001 16.7502 14.2161 16.7502 13.2501C16.7502 12.2831 15.9662 11.5001 15.0002 11.5001ZM10.2502 16.7501C10.2502 15.7831 11.0332 15.0001 12.0002 15.0001C12.9662 15.0001 13.7502 15.7831 13.7502 16.7501C13.7502 17.7161 12.9662 18.5001 12.0002 18.5001C11.0332 18.5001 10.2502 17.7161 10.2502 16.7501Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCookie)
