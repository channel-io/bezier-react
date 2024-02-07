import React from 'react'
import { ProgressBar, ProgressBarSize, ProgressBarVariant, AvatarSize, Avatar } from '@channel.io/bezier-react'

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

export function DummyAvatar() {
  return (
  <Avatar
    avatarUrl="https://bit.ly/kent-c-dodds"
    name="Kent Dodds"
    size={AvatarSize.Size20}
    showBorder
  />)
}
