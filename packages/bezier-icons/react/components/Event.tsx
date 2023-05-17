import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgEvent(props: SVGProps<SVGSVGElement>) {
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
        d="M6.2432 5.33201C9.2842 0.889006 15.7162 0.889006 18.7562 5.33201C20.5182 7.90501 20.3532 11.345 18.6102 13.931L12.9442 22.339C12.7322 22.655 12.2682 22.655 12.0562 22.339L6.3892 13.931C4.6462 11.345 4.4822 7.90501 6.2432 5.33201ZM14.7788 13.9457L12.5002 12.2905L10.2216 13.9457C9.69442 14.3286 8.98536 13.8133 9.18679 13.1938L10.0568 10.5152L7.7782 8.85994C7.25153 8.47708 7.52248 7.64326 8.17392 7.64326H10.9901L11.8606 4.96465C12.0621 4.34512 12.9383 4.34512 13.1397 4.96465L14.0102 7.64326H16.8264C17.4778 7.64326 17.7483 8.47708 17.2217 8.85994L14.9431 10.5152L15.8135 13.1938C16.0145 13.8133 15.3059 14.3286 14.7788 13.9457Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgEvent)
