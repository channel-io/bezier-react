import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgBrowserSafari(props: SVGProps<SVGSVGElement>) {
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
        d="M22 12C22 17.523 17.5226 22 12 22C6.47672 22 2 17.5233 2 12C2 6.47672 6.47672 2 12 2C17.5226 2 22 6.47704 22 12ZM20 12C20 7.58165 16.4181 4 12 4C7.58128 4 4 7.58128 4 12C4 16.4187 7.58128 20 12 20C16.4181 20 20 16.4184 20 12ZM9.28571 14.7161L12.9167 12.9151L12.9227 12.9021L11.4847 11.4441L11.0987 11.0781L11.0857 11.0851L9.28571 14.7161ZM10.4797 10.1301L16.6037 7.09413C16.7967 6.99813 17.0027 7.20313 16.9067 7.39613L13.8717 13.5201C13.7957 13.6721 13.6727 13.7951 13.5217 13.8701L7.39871 16.9061C7.20471 17.0021 6.99971 16.7971 7.09571 16.6031L10.1307 10.4791C10.2067 10.3281 10.3287 10.2051 10.4797 10.1301Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgBrowserSafari)
