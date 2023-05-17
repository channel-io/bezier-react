import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgLinkOff(props: SVGProps<SVGSVGElement>) {
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
        d="M13.9626 14.111C14.3531 14.5014 14.9861 14.5014 15.3766 14.111L18.6176 10.87C20.6716 8.81598 20.6716 5.47398 18.6176 3.41998C16.5636 1.36498 13.2206 1.36398 11.1666 3.41998L9.5459 5.03998C9.1553 5.43042 9.15523 6.06361 9.54575 6.45413C9.93616 6.84454 10.5691 6.84461 10.9596 6.45429L12.5806 4.83398C13.8156 3.59898 15.9666 3.59898 17.2036 4.83398C17.8206 5.45098 18.1606 6.27198 18.1606 7.14498C18.1606 8.01798 17.8206 8.83898 17.2036 9.45598L13.9626 12.697C13.5721 13.0874 13.5721 13.7205 13.9626 14.111Z"
      />
      <path
        fill="currentColor"
        d="M5.30301 20.5802C6.33001 21.6082 7.67901 22.1212 9.02901 22.1212C10.378 22.1212 11.727 21.6082 12.754 20.5802L14.3747 18.9602C14.7653 18.5697 14.7654 17.9366 14.3749 17.546C13.9845 17.1556 13.3515 17.1556 12.961 17.5459L11.34 19.1662C10.104 20.4002 7.95201 20.4002 6.71701 19.1662C6.10001 18.5492 5.76001 17.7282 5.76001 16.8552C5.76001 15.9822 6.10001 15.1622 6.71701 14.5442L9.95801 11.3032C10.3485 10.9127 10.3485 10.2796 9.95801 9.88918C9.56755 9.49872 8.93448 9.49872 8.54401 9.88918L5.30301 13.1302C3.24901 15.1842 3.24901 18.5262 5.30301 20.5802Z"
      />
      <path
        fill="currentColor"
        d="M18 15C18 15.5523 18.4477 16 19 16H21C21.5523 16 22 15.5523 22 15C22 14.4477 21.5523 14 21 14H19C18.4477 14 18 14.4477 18 15Z"
      />
      <path
        fill="currentColor"
        d="M18.7072 21.1212C19.0977 21.5116 19.7307 21.5116 20.1212 21.1212C20.5117 20.7307 20.5117 20.0976 20.1212 19.7072L18.7072 18.2932C18.3167 17.9027 17.6837 17.9027 17.2932 18.2932C16.9027 18.6836 16.9027 19.3167 17.2932 19.7072L18.7072 21.1212Z"
      />
      <path
        fill="currentColor"
        d="M6.70708 5.70731C6.31666 6.09772 5.68369 6.09778 5.2932 5.70743L3.87845 4.29318C3.48787 3.90273 3.48781 3.26957 3.87833 2.87906C4.26875 2.48864 4.90172 2.48858 5.2922 2.87893L6.70695 4.29318C7.09754 4.68363 7.09759 5.31679 6.70708 5.70731Z"
      />
      <path
        fill="currentColor"
        d="M3 9.99998C2.44772 9.99998 2 9.55227 2 8.99998C2 8.4477 2.44772 7.99998 3 7.99998H5C5.55228 7.99998 6 8.4477 6 8.99998C6 9.55227 5.55228 9.99998 5 9.99998H3Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgLinkOff)
