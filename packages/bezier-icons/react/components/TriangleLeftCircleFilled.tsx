import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgTriangleLeftCircleFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M13.8083 7.35559C13.8233 7.35559 13.8363 7.36159 13.8513 7.36359C13.9053 7.36959 13.9553 7.38959 13.9983 7.42159C14.0133 7.43259 14.0273 7.44259 14.0393 7.45659C14.0863 7.50759 14.1223 7.57159 14.1223 7.65159V16.3706C14.1223 16.4506 14.0863 16.5146 14.0393 16.5656C14.0273 16.5786 14.0133 16.5896 13.9993 16.6006C13.9553 16.6326 13.9053 16.6526 13.8513 16.6586C13.8363 16.6606 13.8233 16.6676 13.8083 16.6666C13.7463 16.6636 13.6843 16.6466 13.6303 16.6016L8.39929 12.2416C8.25529 12.1216 8.25529 11.9006 8.39929 11.7806L13.6303 7.42059C13.6843 7.37659 13.7463 7.35859 13.8083 7.35559ZM12.0003 2.00061C6.47731 2.00061 2.00031 6.47761 2.00031 12.0006C2.00031 17.5226 6.47731 22.0006 12.0003 22.0006C17.5223 22.0006 22.0003 17.5226 22.0003 12.0006C22.0003 6.47761 17.5223 2.00061 12.0003 2.00061Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgTriangleLeftCircleFilled)
