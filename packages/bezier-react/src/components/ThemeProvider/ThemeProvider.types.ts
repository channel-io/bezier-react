import type React from 'react'

import {
  type BezierComponentProps,
  type ChildrenProps,
} from '~/src/types/props'

import { type TokenProviderProps } from '~/src/components/TokenProvider'

export interface ThemeProviderProps extends
  Pick<TokenProviderProps, 'themeName'>,
  Omit<BezierComponentProps, 'children'>,
  ChildrenProps<React.ReactElement> {}

export type FixedThemeProviderProps = Omit<ThemeProviderProps, 'themeName'>
