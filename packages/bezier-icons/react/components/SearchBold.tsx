import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgSearchBold(props: SVGProps<SVGSVGElement>) {
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
        d="M18.0002 10.0001C18.0002 5.58181 14.4185 2.00009 10.0002 2.00009C5.5819 2.00009 2.00018 5.58181 2.00018 10.0001C2.00018 14.4184 5.5819 18.0001 10.0002 18.0001C11.6672 18.0001 13.2152 17.4902 14.4966 16.6179L18.9393 21.0607C19.5251 21.6464 20.4749 21.6464 21.0607 21.0607C21.6464 20.4749 21.6464 19.5251 21.0607 18.9393L16.6179 14.4966C17.4903 13.2152 18.0002 11.6672 18.0002 10.0001ZM15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgSearchBold)
