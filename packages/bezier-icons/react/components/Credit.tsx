import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCredit(props: SVGProps<SVGSVGElement>) {
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
        d="M21 9C21 5.68629 18.3137 3 15 3H9C5.68629 3 3 5.68629 3 9V15C3 18.3137 5.68629 21 9 21H15C18.3137 21 21 18.3137 21 15V9ZM9 5H15L15.1996 5.0049C17.316 5.10892 19 6.8578 19 9V15L18.9951 15.1996C18.8911 17.316 17.1422 19 15 19H9L8.80036 18.9951C6.68397 18.8911 5 17.1422 5 15V9L5.0049 8.80036C5.10892 6.68397 6.8578 5 9 5ZM12 8C13.4868 8 14.7841 8.81118 15.4736 10.0151L13.7368 11.0076C13.3921 10.4056 12.7434 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C12.7434 14 13.3921 13.5944 13.7368 12.9924L15.4736 13.9849C14.7841 15.1888 13.4868 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCredit)
