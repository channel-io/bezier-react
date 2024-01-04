import { useToken } from '~/src/providers/ThemeProvider'

export function useGetAvatarBorderRadius() {
  return useToken().global.radius['radius-42-p']
}
