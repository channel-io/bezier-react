import React from 'react'
import { ProgressBar, Avatar } from '@channel.io/bezier-react'

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

export function DummyAvatar() {
  return (
  <Avatar
    avatarUrl="https://bit.ly/kent-c-dodds"
    name="Kent Dodds"
    size='20'
    showBorder
  />)
}