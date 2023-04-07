import { type ToastType } from './Toast.types'
import ToastService from './ToastService'

const UUID_V4_REGEX = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i

function createToasts(size: number): ToastType[] {
  return Array.from(Array(size)).map((_, i) => ({
    id: `${i}`,
    content: `${i}`,
    version: 0,
  }))
}

describe('ToastService', () => {
  it('initialize', () => {
    const toastService = new ToastService()

    expect(toastService.toasts).toStrictEqual([])
  })

  describe('getToasts()', () => {
    const toastService = new ToastService()

    expect(toastService.toasts).toStrictEqual([])
    expect(toastService.getToasts()).toStrictEqual([])
  })

  it('setToasts()', () => {
    const toastService = new ToastService()

    const nextToasts: ToastType[] = createToasts(2)
    toastService.setToasts(nextToasts)
    expect(toastService.getToasts()).toStrictEqual(nextToasts)
  })

  it('add()', () => {
    const toastService = new ToastService()

    toastService.add('0')
    expect(toastService.getToasts()).toStrictEqual([
      expect.objectContaining({
        id: expect.stringMatching(UUID_V4_REGEX),
        appearance: 'info',
        autoDismiss: false,
        content: '0',
        iconName: 'info-filled',
        rightSide: false,
        version: 0,
      }),
    ])
  })

  describe('update()', () => {
    it('not found', () => {
      const toastService = new ToastService()
      expect(toastService.update('0', 'Not found')).toBe('')
    })

    it('updated', () => {
      const toastService = new ToastService()

      const size = 2
      const nextToasts: ToastType[] = createToasts(size)
      toastService.setToasts(nextToasts)

      const targetIndex = size - 1
      const targetToast = toastService.getToasts()[targetIndex]
      const updateTargetToast: ToastType = {
        ...targetToast,
        content: 'New Toast',
      }
      expect(toastService.update(updateTargetToast.id, updateTargetToast.content)).toBe(updateTargetToast.id)
      expect(toastService.getToasts()[targetIndex]).toStrictEqual({
        ...updateTargetToast,
        version: 1,
      })
    })
  })

  it('remove()', () => {
    const toastService = new ToastService()

    const nextToasts: ToastType[] = createToasts(2)
    toastService.setToasts(nextToasts)
    toastService.remove('1')
    expect(toastService.getToasts()).toStrictEqual(createToasts(1))
  })
})
