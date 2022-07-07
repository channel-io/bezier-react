import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgChatBubbleAlt(props: SVGProps<SVGSVGElement>) {
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
        d="M12 3C6.369 3 1.5 6.875 1.5 12c0 2.848 1.531 5.335 3.835 6.958-.24.634-.545 1.219-.815 1.677-.311.529-.266 1.15.034 1.606a1.44 1.44 0 0 0 1.57.609c1.053-.267 2.668-.825 4.15-1.97.563.079 1.14.12 1.726.12 5.631 0 10.5-3.875 10.5-9S17.631 3 12 3Zm-8.5 9c0-3.712 3.638-7 8.5-7s8.5 3.288 8.5 7-3.638 7-8.5 7c-.63 0-1.241-.056-1.83-.163l-.467-.085-.36.309c-.808.69-1.705 1.155-2.503 1.465a10.79 10.79 0 0 0 .649-1.722l.202-.735-.655-.39C4.843 16.375 3.5 14.283 3.5 12Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgChatBubbleAlt)
