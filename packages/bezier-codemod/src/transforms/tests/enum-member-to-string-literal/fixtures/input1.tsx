import React from 'react'
import { ProgressBar, ProgressBarSize, ProgressBarVariant } from '@channel.io/bezier-react'

export default function UploadProgress({
  uploadProgressPercentage,
}: {
  uploadProgressPercentage: number
}) {
  return (
    <ProgressBar
      width='100%'
      size={ProgressBarSize.M}
      variant={ProgressBarVariant.GreenAlt}
      value={uploadProgressPercentage / 100}
    />
  )
}
