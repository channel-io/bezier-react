import React from 'react'
import { ProgressBar, ProgressBarSize, ProgressBarVariant } from '@channel.io/bezier-react'

export default function UploadProgress({
  uploadProgressPercentage,
  variant,
}: {
  uploadProgressPercentage: number
  variant: ProgressBarVariant
}) {
  if (variant === ProgressBarVariant.Monochrome) {
    return (
      <>
        <p>Monochrome ProgressBar</p>
          <ProgressBar
            width='100%'
            size={ProgressBarSize.M}
            variant={ProgressBarVariant.Monochrome}
            value={uploadProgressPercentage / 100}
          />
      </>
    )
  }

  return (
    <>
      <p>Colored ProgressBar</p>
        <ProgressBar
          width='100%'
          size={ProgressBarSize.M}
          variant={variant}
          value={uploadProgressPercentage / 100}
        />
    </>
  )
}
