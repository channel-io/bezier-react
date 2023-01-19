/* External dependencies */
import React from 'react'

/* Internal dependencies */
import type { BezierComponentProps, ChildrenProps } from '~/src/types/ComponentProps'
import type { IconName } from '~/src/components/Icon'

interface KeyItemOptions {
  keyIcon?: IconName | React.ReactNode
}

export interface KeyItemProps extends
  BezierComponentProps,
  ChildrenProps,
  React.HTMLAttributes<HTMLDivElement>,
  KeyItemOptions {}
