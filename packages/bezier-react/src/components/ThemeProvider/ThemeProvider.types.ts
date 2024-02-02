import type React from 'react'

import { type ChildrenProps } from '~/src/types/props'

import { type TokenProviderProps } from '~/src/components/TokenProvider'

export interface ThemeProviderProps extends
  Pick<TokenProviderProps, 'themeName'>,
  ChildrenProps<React.ReactElement> {}

export type FixedThemeProviderProps = Omit<ThemeProviderProps, 'themeName'>
