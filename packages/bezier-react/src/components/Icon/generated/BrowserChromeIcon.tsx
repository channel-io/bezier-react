import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgBrowserChromeIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M12 6.648c-2.447 0-4.494 1.66-5.13 3.908L4.145 5.833C5.977 3.503 8.814 2 12 2c3.544 0 6.657 1.859 8.433 4.648h-8.376l-.02.004a.119.119 0 0 1-.018-.002l-.02-.002Zm0 9.073A3.725 3.725 0 0 1 8.28 12 3.724 3.724 0 0 1 12 8.28 3.724 3.724 0 0 1 15.721 12 3.726 3.726 0 0 1 12 15.721Zm9.275-7.44h-5.44A5.324 5.324 0 0 1 17.355 12c0 .95-.27 1.83-.707 2.604-.007.017-.011.034-.015.05-.006.025-.012.049-.025.071l-4.187 7.252C17.738 21.758 22 17.373 22 12a9.922 9.922 0 0 0-.725-3.72ZM12 17.352c.454 0 .888-.075 1.31-.181l-2.724 4.716C5.741 21.197 2 17.033 2 12a9.93 9.93 0 0 1 1.145-4.632l4.191 7.259a.25.25 0 0 0 .041.048.325.325 0 0 1 .034.037c.933 1.572 2.63 2.641 4.59 2.641Z"
      />
    </svg>
  )
}

export default createIcon(SvgBrowserChromeIcon)
