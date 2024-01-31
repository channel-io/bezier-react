import { useToken } from '~/src/components/ThemeProvider'

export function useAvatarRadiusToken() {
  return useToken().global.radius['radius-42-p']
}
