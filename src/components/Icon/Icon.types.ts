/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { StylableComponentProps } from '../../types/ComponentProps'
import { IconName } from './generated'

type SVGProps = React.SVGProps<SVGSVGElement>

export enum IconSize {
  L = 34,
  Normal = 24,
  S = 20,
  XS = 16,
  XXS = 12,
}

export interface IconStyledProps {
  color?: string
  marginTop: number
  marginRight: number
  marginBottom: number
  marginLeft: number
}

export default interface IconProps extends StylableComponentProps, Omit<SVGProps, 'ref'> {
  name: IconName
  color?: string
  size?: IconSize
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
}
