import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgLinkCopy(props: SVGProps<SVGSVGElement>) {
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
        d="M19.3581 4.63011C18.5179 3.78996 17.1554 3.78996 16.3153 4.63011C15.9247 5.02063 15.2916 5.02063 14.901 4.63011C14.5105 4.23958 14.5105 3.60642 14.901 3.21589C16.5222 1.5947 19.1511 1.5947 20.7723 3.21589C22.3934 4.83705 22.3935 7.46583 20.7724 9.08703L18.1963 11.664C16.5744 13.2848 13.9461 13.2855 12.3241 11.6645C11.9334 11.2741 11.9332 10.641 12.3236 10.2503C12.714 9.85968 13.3472 9.85948 13.7379 10.2499C14.5787 11.0902 15.9411 11.0902 16.7822 10.2496L19.358 7.67303C20.1981 6.83289 20.1982 5.47025 19.3581 4.63011ZM15.2426 8.74589C14.4027 7.90601 13.0396 7.90612 12.1991 8.74653L9.63011 11.3156C8.78997 12.1557 8.78997 13.5182 9.63011 14.3584C10.4702 15.1985 11.832 15.1985 12.6721 14.3584C13.0627 13.9679 13.6958 13.9679 14.0863 14.3584C14.4769 14.7489 14.4769 15.3821 14.0863 15.7726C12.4652 17.3938 9.83708 17.3938 8.21589 15.7726C6.5947 14.1514 6.5947 11.5225 8.21589 9.90136L10.7849 7.33232C12.4059 5.71139 15.0354 5.71022 16.6568 7.33168C17.0473 7.7222 17.0473 8.35537 16.6568 8.74589C16.2663 9.13642 15.6331 9.13642 15.2426 8.74589ZM7.85424 5.05118C8.39601 5.00691 9.07314 5.00092 10 5.00012V3.00008C9.07921 3.00072 8.31978 3.00648 7.69138 3.05782C6.96253 3.11737 6.32234 3.24318 5.73005 3.54497C4.78924 4.02433 4.02434 4.78924 3.54497 5.73005C3.24318 6.32234 3.11737 6.96253 3.05782 7.69138C2.99998 8.39926 2.99999 9.27341 3 10.3572V13.6428C2.99999 14.7266 2.99998 15.6007 3.05782 16.3086C3.11737 17.0375 3.24318 17.6777 3.54497 18.27C4.02434 19.2108 4.78924 19.9757 5.73005 20.455C6.32234 20.7568 6.96253 20.8826 7.69138 20.9422C8.39923 21 9.27334 21 10.3571 21H10.3572H13.6428H13.6429C14.7267 21 15.6008 21 16.3086 20.9422C17.0375 20.8826 17.6777 20.7568 18.27 20.455C19.2108 19.9757 19.9757 19.2108 20.455 18.27C20.7568 17.6777 20.8826 17.0375 20.9422 16.3086C20.9935 15.6802 20.9993 14.9208 20.9999 14H18.9999C18.9991 14.9269 18.9931 15.604 18.9488 16.1458C18.8994 16.7509 18.8072 17.0986 18.673 17.362C18.3854 17.9265 17.9265 18.3854 17.362 18.673C17.0986 18.8072 16.7509 18.8994 16.1458 18.9488C15.5289 18.9992 14.7366 19 13.6 19H10.4C9.2634 19 8.47108 18.9992 7.85424 18.9488C7.24907 18.8994 6.90138 18.8072 6.63803 18.673C6.07354 18.3854 5.6146 17.9265 5.32698 17.362C5.1928 17.0986 5.10062 16.7509 5.05118 16.1458C5.00078 15.5289 5 14.7366 5 13.6V10.4C5 9.26339 5.00078 8.47108 5.05118 7.85424C5.10062 7.24907 5.1928 6.90138 5.32698 6.63803C5.6146 6.07354 6.07354 5.6146 6.63803 5.32698C6.90138 5.19279 7.24907 5.10062 7.85424 5.05118Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgLinkCopy)
