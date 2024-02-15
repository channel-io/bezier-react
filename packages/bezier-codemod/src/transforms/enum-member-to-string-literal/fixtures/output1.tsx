import React from 'react'
import { ProgressBar } from '@channel.io/bezier-react'

export default function UploadProgress({
  uploadProgressPercentage,
}: {
  uploadProgressPercentage: number
}) {
  return (
    <ProgressBar
      width='100%'
      size='m'
      variant='green-alt'
      value={uploadProgressPercentage / 100}
    />
  )
}
