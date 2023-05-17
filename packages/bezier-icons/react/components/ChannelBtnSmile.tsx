import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChannelBtnSmile(props: SVGProps<SVGSVGElement>) {
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
        d="M1 11.9004C1.05381 5.87201 5.95869 1 12 1C18.0752 1 23 5.92531 23 12C23 18.0747 18.0752 23 12 23C5.95869 23 1.05381 18.1285 1 12.0996V11.9004ZM11.1069 19.0953C11.4017 19.1318 11.6991 19.15 11.9977 19.15C13.1205 19.15 14.218 18.8877 15.2195 18.38L16.6784 19.0057C17.3461 19.2916 18.1166 19.1431 18.6301 18.6297C19.1444 18.1153 19.2926 17.3457 19.0051 16.6777L18.3801 15.2189C19.0236 13.9491 19.2705 12.5297 19.0945 11.1065C18.6988 7.89768 16.097 5.29461 12.8936 4.90404C10.6789 4.63516 8.50909 5.37827 6.94405 6.94391C5.37816 8.5092 4.63441 10.6804 4.90439 12.8938C5.29435 16.0965 7.89785 18.6989 11.1069 19.0953ZM14.6196 16.9009C13.8094 17.3363 12.9156 17.5611 11.9977 17.5611C11.7641 17.5611 11.532 17.5469 11.3021 17.5184C8.81606 17.2113 6.78331 15.1794 6.48161 12.7016C6.27063 10.972 6.84799 9.28652 8.06756 8.06742C9.28648 6.84803 10.9709 6.27116 12.7017 6.48129C15.1798 6.78343 17.2111 8.81571 17.5176 11.3012C17.6606 12.4572 17.447 13.6036 16.9004 14.6204C16.7188 14.9561 16.7106 15.3619 16.8636 15.7138L17.5451 17.3046C17.5758 17.3758 17.5612 17.4515 17.5065 17.5062C17.4524 17.5603 17.3745 17.5753 17.3043 17.5452L15.7105 16.8617C15.3567 16.7118 14.9547 16.7203 14.6196 16.9009ZM10.0817 11.0111C9.4726 11.0111 9.21945 10.5681 9.21945 9.61708C9.21945 8.66606 9.4726 8.2231 10.0817 8.2231C10.6903 8.2231 10.9434 8.66617 10.9434 9.61708C10.9434 10.568 10.6903 11.0111 10.0817 11.0111ZM13.0566 9.61708C13.0566 10.5681 13.3098 11.0111 13.9188 11.0111C14.5278 11.0111 14.7806 10.5683 14.7806 9.61708C14.7806 8.66581 14.5278 8.2231 13.9188 8.2231C13.3098 8.2231 13.0566 8.66606 13.0566 9.61708ZM13.5119 11.4041H10.4876C10.3148 11.4041 10.1858 11.5632 10.2172 11.7328C10.3717 12.5774 11.1109 13.2171 11.9994 13.2171C12.8886 13.2171 13.6284 12.5774 13.7829 11.7328C13.8137 11.5632 13.6847 11.4041 13.5119 11.4041Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChannelBtnSmile)
