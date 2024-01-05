import { useToken } from '~/src/providers/ThemeProvider'

export function useAvatarRadiusToken() {
  return useToken().global.radius['radius-42-p']
}
