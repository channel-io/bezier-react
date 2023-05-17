import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCameraSwitch(props: SVGProps<SVGSVGElement>) {
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
        d="M9.23607 3C8.09975 3 7.06096 3.64201 6.55279 4.65836L6.38197 5H5C3.34315 5 2 6.34315 2 8V17C2 18.6569 3.34315 20 5 20H19C20.6569 20 22 18.6569 22 17V8C22 6.34315 20.6569 5 19 5H17.618L17.4472 4.65836C16.939 3.64201 15.9002 3 14.7639 3H9.23607ZM8.34164 5.55279C8.51103 5.214 8.8573 5 9.23607 5H14.7639C15.1427 5 15.489 5.214 15.6584 5.55279L16.1056 6.44721C16.275 6.786 16.6212 7 17 7H19C19.5523 7 20 7.44772 20 8V17C20 17.5523 19.5523 18 19 18H5C4.44772 18 4 17.5523 4 17V8C4 7.44772 4.44772 7 5 7H7C7.37877 7 7.72504 6.786 7.89443 6.44721L8.34164 5.55279ZM8.85234 11.1869C9.21317 9.78504 10.4867 8.75 12 8.75C13.0152 8.75 13.9224 9.21576 14.5186 9.94558L13.444 10.698C13.2704 10.8196 13.3174 11.0885 13.5219 11.144L16.4859 11.949C16.6366 11.99 16.7875 11.8843 16.8006 11.7287L17.0579 8.66815C17.0756 8.45694 16.839 8.32085 16.6653 8.44242L15.7495 9.08373C14.8805 7.9679 13.5245 7.25 12 7.25C9.78566 7.25 7.92695 8.76451 7.39969 10.8131L8.85234 11.1869ZM15.1465 12.7709C14.7856 14.1729 13.5121 15.2079 11.9988 15.2079C10.9836 15.2079 10.0764 14.7421 9.48019 14.0123L10.5548 13.2599C10.7284 13.1383 10.6814 12.8694 10.4769 12.8138L7.51289 12.0089C7.36223 11.9679 7.21133 12.0736 7.19825 12.2292L6.94095 15.2897C6.92319 15.5009 7.15983 15.637 7.33346 15.5155L8.24935 14.8742C9.11828 15.99 10.4743 16.7079 11.9988 16.7079C14.2131 16.7079 16.0719 15.1934 16.5991 13.1448L15.1465 12.7709Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCameraSwitch)
