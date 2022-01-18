/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { FoundationProvider, LightFoundation, DarkFoundation } from 'Foundation'

const FoundationKeyword = {
  Light: 'light',
  Dark: 'dark',
}

export const parameters = {
  layout: 'centered',
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: 'white',
      },
      {
        name: 'dark',
        value: '#2f3233',
      },
    ],
  }
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
  const backgroundColor = context.globals.Foundation === 'dark'
    ? DarkFoundation.theme['bg-white-normal']
    : LightFoundation.theme['bg-white-normal']

  return (
    <div
      style={{
        backgroundColor,
        padding: 16,
        fontFamily: 'Inter',
      }}
    >
      <FoundationProvider foundation={Foundation}>
        { Story(context) }
      </FoundationProvider>
    </div>
  )
}

export const decorators = [withFoundationProvider]
