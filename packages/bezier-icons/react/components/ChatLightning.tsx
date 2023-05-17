import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChatLightning(props: SVGProps<SVGSVGElement>) {
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
        d="M18.8683 17.7642C18.6493 17.1072 18.7183 16.3912 19.0613 15.7472C19.9443 14.0942 20.2123 12.2292 19.8343 10.3542C19.1883 7.14318 16.5803 4.63318 13.3453 4.10918C12.8943 4.03618 12.4433 4.00018 11.9993 4.00018C9.87729 4.00018 7.87229 4.81818 6.35029 6.33818C4.50829 8.17518 3.69129 10.7232 4.10729 13.3272C4.64829 16.7132 7.41029 19.4222 10.8223 19.9152C12.5333 20.1622 14.2393 19.8662 15.7483 19.0602C16.3923 18.7172 17.1063 18.6482 17.7643 18.8672L19.4193 19.4192L18.8683 17.7642ZM20.8253 16.6892C20.7783 16.7792 20.7073 16.9552 20.7653 17.1322L21.6333 19.7352C21.8143 20.2782 21.6753 20.8662 21.2713 21.2702C20.8663 21.6752 20.2763 21.8112 19.7363 21.6332L17.1313 20.7652C16.9573 20.7072 16.7803 20.7772 16.6913 20.8242C15.2353 21.6022 13.6363 22.0002 12.0003 22.0002C11.5153 22.0002 11.0263 21.9652 10.5363 21.8942C6.2663 21.2782 2.8103 17.8842 2.1323 13.6432C1.6133 10.3972 2.6363 7.21818 4.9363 4.92218C7.2383 2.62518 10.4213 1.61118 13.6643 2.13518C17.7183 2.79118 20.9853 5.93518 21.7953 9.96018C22.2653 12.2952 21.9303 14.6222 20.8253 16.6892ZM13.4271 10.547L15.9691 11.135C16.1941 11.188 16.2741 11.466 16.1111 11.63L10.0351 17.723C9.82014 17.939 9.45914 17.725 9.54514 17.432L10.7701 13.264L8.22814 12.676C8.00314 12.623 7.92314 12.345 8.08614 12.181L14.1621 6.08803C14.3771 5.87203 14.7391 6.08603 14.6531 6.37903L13.4271 10.547Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChatLightning)
