/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import SliderProps from './Slider.types'

/* eslint-disable @typescript-eslint/no-unused-vars */

function Slider({
  ...rest
}: SliderProps,
forwardedRef: React.Ref<HTMLDivElement>,
) {
  return (
    <>Slider</>
  )
}

export default forwardRef(Slider)
