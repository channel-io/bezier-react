import React from 'react'
import { ProgressBar, ProgressBarVariant } from '@channel.io/bezier-react'

export default function UploadProgress({
  uploadProgressPercentage,
  variant,
}: {
  uploadProgressPercentage: number
  variant: ProgressBarVariant
}) {
  if (variant === 'monochrome') {
    return (
      <>
        <p>Monochrome ProgressBar</p>
          <ProgressBar
            width='100%'
            size='m'
            variant='monochrome'
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
          size='m'
          variant={variant}
          value={uploadProgressPercentage / 100}
        />
    </>
  )
}
