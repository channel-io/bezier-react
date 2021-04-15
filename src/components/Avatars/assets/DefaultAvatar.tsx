/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { LightFoundation } from '../../../foundation/BaseFoundation'
import { AVATAR_BACKGROUND_COLOR } from '../constants/AvatarStyle'

function DefaultAvatarSvg() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <rect
          width="60"
          height="60"
          fill={AVATAR_BACKGROUND_COLOR}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          // eslint-disable-next-line max-len
          d="M41 23C41 29.0744 36.0744 34 30 34C23.9256 34 19 29.0744 19 23C19 16.9256 23.9256 12 30 12C36.0744 12 41 16.9256 41 23ZM30 37C16.1929 37 5 48.1929 5 62V90H55V62C55 48.1929 43.8071 37 30 37Z"
          fill={LightFoundation.theme['bg-white-lightest-absolute']}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="60"
            height="60"
            fill={LightFoundation.theme['bg-white-absolute']}
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default DefaultAvatarSvg
