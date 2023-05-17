import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgFolder(props: SVGProps<SVGSVGElement>) {
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
        d="M5 3C3.34315 3 2 4.34315 2 6V16C2 17.6569 3.34315 19 5 19H19C20.6569 19 22 17.6569 22 16V8C22 6.34315 20.6569 5 19 5H12.8284C12.5632 5 12.3089 4.89464 12.1213 4.70711L11.2929 3.87868C10.7303 3.31607 9.96722 3 9.17157 3H5ZM10.5858 6L9.87868 5.29289C9.69114 5.10536 9.43679 5 9.17157 5H5C4.44772 5 4 5.44772 4 6V7.17071C4.31278 7.06015 4.64936 7 5 7H9.17157C9.43679 7 9.69114 6.89464 9.87868 6.70711L10.5858 6ZM4 10V16C4 16.5523 4.44772 17 5 17H19C19.5523 17 20 16.5523 20 16V8C20 7.44772 19.5523 7 19 7H12.8284C12.5632 7 12.3089 7.10536 12.1213 7.29289L11.2929 8.12132C10.7303 8.68393 9.96722 9 9.17157 9H5C4.44772 9 4 9.44772 4 10Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgFolder)
