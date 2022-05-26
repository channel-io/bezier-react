import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgBotFilledIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M12.004 2.002a2.975 2.975 0 0 1 2.976 2.976H9.028a2.976 2.976 0 0 1 2.976-2.976Zm2.408 10.972c0 1.787.422 2.516 1.432 2.516s1.432-.729 1.432-2.516c0-1.786-.422-2.515-1.432-2.515s-1.432.73-1.432 2.515Zm-7.68 0c0 1.787.422 2.516 1.432 2.516s1.432-.729 1.432-2.516c0-1.786-.422-2.515-1.432-2.515s-1.432.73-1.432 2.515Zm-2.545-7h15.634c1.206 0 2.183.977 2.183 2.183v9.634a2.183 2.183 0 0 1-2.183 2.183H4.187a2.183 2.183 0 0 1-2.183-2.183V8.157c0-1.206.977-2.183 2.183-2.183Z"
      />
    </svg>
  )
}

export default createIcon(SvgBotFilledIcon)
