/* External dependencies */
import {
  getWindow,
  getDocument,
} from 'ssr-window'

export const document = getDocument()

export const window = getWindow()

// TODO: Test 가능하도록 형태 변경 필요, jest 타이밍에 module 해석 시에는 rootElement 가 항상 null 임.
export const getRootElement = () =>
  document.getElementById!('main') ||
  document.getElementById!('root') ||
  document.getElementById!('__next') as HTMLElement
