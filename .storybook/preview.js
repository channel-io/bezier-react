/* External dependencies */
import React from 'react'

/* Internel dependencies */
import EnableCSSHoudini from '../src/worklets/EnableCSSHoudini'
import { FoundationProvider, LightFoundation, DarkFoundation } from '../src/foundation'

// CSS Houdini
EnableCSSHoudini({ smoothCorners: true })

const FoundationKeyword = {
  Light: 'light',
  Dark: 'dark',
}

export const parameters = {
  layout: 'centered',
}

export const globalTypes = {
  Foundation: {
    name: 'Foundation',
    description: 'Global Foundation for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [FoundationKeyword.Light, FoundationKeyword.Dark],
    },
  },
};

function getFoundation(keyword) {
  if (keyword === FoundationKeyword.Light) return LightFoundation
  return DarkFoundation
}

function withFoundationProvider(Story, context) {
  const Foundation = getFoundation(context.globals.Foundation)
  const backgroundColor = context.globals.Foundation === 'dark' ? 'black' : 'white'

  return (
    <div style={{ backgroundColor }}>
      <FoundationProvider foundation={Foundation}>
        { Story(context) }
      </FoundationProvider>
    </div>
  )
}

export const decorators = [withFoundationProvider]
