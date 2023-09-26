import React from 'react'
import { ProgressBar, type ProgressBarSize, ProgressBarVariant } from '@channel.io/bezier-react'

export default function UploadProgress({
  uploadProgressPercentage,
  size,
}: {
  uploadProgressPercentage: number
  size: ProgressBarSize
}) {
  return (
    <ProgressBar
      width='100%'
      size={size}
      variant={ProgressBarVariant.GreenAlt}
      value={uploadProgressPercentage / 100}
    />
  )
}
