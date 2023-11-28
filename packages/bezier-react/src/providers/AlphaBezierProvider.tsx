import React, { useEffect } from 'react'

import {
  type ThemeName,
  TokenProvider,
} from '~/src/hooks/useToken'
import { document } from '~/src/utils/domUtils'

import { TooltipProvider } from '~/src/components/Tooltip'

interface AlphaBezierProviderProps {
  children: React.ReactNode
  themeName?: ThemeName
  root?: HTMLElement
}

function AlphaBezierProvider({
  children,
  themeName = 'light',
  root = document.documentElement,
}: AlphaBezierProviderProps) {
  useEffect(function updateThemeDataAttribute() {
    // TODO: Change data attribute constant to import from bezier-tokens
    root.setAttribute('data-bezier-theme', themeName)
    return function cleanup() {
      root.removeAttribute('data-bezier-theme')
    }
  }, [
    root,
    themeName,
  ])

  return (
    <TokenProvider themeName={themeName}>
      <TooltipProvider>
        { children }
      </TooltipProvider>
    </TokenProvider>
  )
}

export default AlphaBezierProvider
