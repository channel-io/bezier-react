import { useEffect, useLayoutEffect } from 'react'

/**
 * @description This hook is used to handle the layout effect in a way that is compatible with SSR.
 * In Server Environments, this hook will use `useEffect` instead of `useLayoutEffect`.
 * 
 * @see https://react.dev/reference/react/useLayoutEffect#troubleshooting
 */
export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect
