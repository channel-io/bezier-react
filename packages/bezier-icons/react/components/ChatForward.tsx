import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChatForward(props: SVGProps<SVGSVGElement>) {
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
        d="M13.6643 2.13518C13.7768 2.15339 13.8887 2.17352 14 2.19553V4.2444C13.7847 4.19028 13.566 4.14507 13.3443 4.10918C12.8933 4.03618 12.4433 4.00018 11.9983 4.00018C9.87734 4.00018 7.87134 4.81818 6.34934 6.33818C4.50834 8.17518 3.69033 10.7232 4.10633 13.3272C4.64833 16.7132 7.40933 19.4222 10.8223 19.9152C12.5333 20.1622 14.2383 19.8662 15.7483 19.0612C16.3903 18.7172 17.1053 18.6482 17.7633 18.8672L19.4193 19.4192L18.8673 17.7642C18.6493 17.1082 18.7173 16.3922 19.0603 15.7482C19.6844 14.5799 20.0009 13.3069 20.0005 12H22V11.8069C22.0341 13.5076 21.6379 15.1684 20.8253 16.6892C20.7773 16.7782 20.7063 16.9562 20.7653 17.1322L21.6333 19.7352C21.8133 20.2782 21.6753 20.8662 21.2703 21.2702C20.8663 21.6752 20.2773 21.8112 19.7353 21.6332L17.1303 20.7652C16.9563 20.7062 16.7793 20.7762 16.6903 20.8242C15.2343 21.6022 13.6363 22.0002 12.0003 22.0002C11.5143 22.0002 11.0253 21.9652 10.5363 21.8942C6.26635 21.2782 2.81035 17.8842 2.13235 13.6432C1.61335 10.3972 2.63535 7.21918 4.93635 4.92218C7.23735 2.62518 10.4153 1.61118 13.6643 2.13518ZM19 8.77508V7H17.9C16.2984 7 15 8.29837 15 9.9V10C15 10.5523 14.5523 11 14 11C13.4477 11 13 10.5523 13 10V9.9C13 7.1938 15.1938 5 17.9 5H19V3.22492C19 2.58038 19.7516 2.25759 20.1912 2.71335L22.7445 5.36054C23.0852 5.7137 23.0852 6.2863 22.7445 6.63946L20.1912 9.28665C19.7516 9.74241 19 9.41962 19 8.77508Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChatForward)
