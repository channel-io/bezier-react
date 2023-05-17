import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChatProgressFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M20.8223 16.683C20.5763 17.144 20.5573 17.694 20.7233 18.19L21.3613 20.105C21.6223 20.886 20.8793 21.63 20.0973 21.37C19.6395 21.2172 19.1583 21.0569 18.7279 20.9135L18.1743 20.729C17.6813 20.565 17.1373 20.584 16.6783 20.829C14.7293 21.868 12.4033 22.29 9.9473 21.796C5.9463 20.991 2.7823 17.703 2.1293 13.675C1.0233 6.848 6.8373 1.033 13.6643 2.137C17.6933 2.789 20.9823 5.954 21.7873 9.954C22.2813 12.409 21.8613 14.734 20.8223 16.683ZM6.20628 11.9928C6.20628 12.7374 6.81476 13.3459 7.55934 13.3459C8.30392 13.3459 8.91239 12.7374 8.91239 11.9928C8.91239 11.2493 8.30392 10.6408 7.55934 10.6408C6.81476 10.6408 6.20628 11.2493 6.20628 11.9928ZM12.0399 13.3459C11.2963 13.3459 10.6869 12.7374 10.6869 11.9928C10.6869 11.2493 11.2963 10.6408 12.0399 10.6408C12.7845 10.6408 13.393 11.2493 13.393 11.9928C13.393 12.7374 12.7845 13.3459 12.0399 13.3459ZM15.1679 11.9928C15.1679 12.7374 15.7763 13.3459 16.5209 13.3459C17.2645 13.3459 17.874 12.7374 17.874 11.9928C17.874 11.2493 17.2645 10.6408 16.5209 10.6408C15.7763 10.6408 15.1679 11.2493 15.1679 11.9928Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChatProgressFilled)
