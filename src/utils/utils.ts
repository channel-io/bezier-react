/* External dependencies */
import { noop } from 'lodash-es'

type EventHandler<K extends keyof HTMLElementEventMap> = (event: HTMLElementEventMap[K]) => any

export const getTitle = (baseDir: string) => {
  const filePath = baseDir.split('/')
  // NOTE: 공백과 src를 제외하고 component/.../lastFolderName 을 return
  return filePath.slice(2, filePath.length - 1).join('/')
}

export const listen = <K extends keyof HTMLElementEventMap>(element: any, eventName: K, handler: EventHandler<K>) => {
  if (!element) return noop

  element.addEventListener(eventName, handler)
  return function cleanup() {
    element.removeEventListener(eventName, handler)
  }
}
