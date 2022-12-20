/* Internal dependencies */
import {
  debounce,
  throttle,
} from './timingUtils'

describe('timingUtils', () => {
  describe('debounce >', () => {
    jest.useFakeTimers()

    test('test debounce', () => {
      const funcSpy = jest.fn()
      const debounced = debounce(funcSpy, 50)

      debounced()
      debounced()
      debounced()
      expect(funcSpy).toHaveBeenCalledTimes(0)

      jest.runAllTimers()
      expect(funcSpy).toHaveBeenCalledTimes(1)

      debounced()
      debounced()
      debounced()
      expect(funcSpy).toHaveBeenCalledTimes(1)

      jest.runAllTimers()
      expect(funcSpy).toHaveBeenCalledTimes(2)
    })

    test('support trailing option, default value is true', () => {
      const callCounts = [0, 0, 0]

      const withoutTrailing = debounce(() => {
        callCounts[0] += 1
      }, 50, { trailing: false })

      const withTrailing = debounce(() => {
        callCounts[1] += 1
      }, 50)

      const withTrailingAndLeading = debounce(() => {
        callCounts[2] += 1
      }, 50, { leading: true })

      withoutTrailing()
      withoutTrailing()
      withoutTrailing()

      withTrailing()
      withTrailing()
      withTrailing()

      withTrailingAndLeading()
      withTrailingAndLeading()
      withTrailingAndLeading()

      jest.runAllTimers()
      expect(callCounts).toStrictEqual([0, 1, 2])
    })

    test('support leading option, default value is false', () => {
      const callCounts = [0, 0]

      const withoutLeading = debounce(() => {
        callCounts[0] += 1
      }, 50)

      const withLeading = debounce(() => {
        callCounts[1] += 1
      }, 50, { leading: true })

      withoutLeading()
      expect(callCounts[0]).toBe(0)

      withLeading()
      expect(callCounts[1]).toBe(1)

      jest.runAllTimers()

      expect(callCounts).toStrictEqual([1, 1])
    })

    test('support maxWait option', () => {
      const limit = 30
      const callCounts = [0, 0]

      const withMaxWait = debounce(() => {
        callCounts[0] += 1
      }, 5, { maxWait: 20 })

      const withoutMaxWait = debounce(() => {
        callCounts[1] += 1
      }, 5)

      const start = Date.now()
      while ((Date.now() - start) < limit) {
        withMaxWait()
        withoutMaxWait()
      }

      expect(callCounts).toStrictEqual([1, 0])
    })

    test('support cancel method', () => {
      const funcSpy = jest.fn()
      const debounced = debounce(funcSpy, 50)

      debounced()
      debounced.cancel()

      jest.runAllTimers()
      expect(funcSpy).toHaveBeenCalledTimes(0)
    })

    test('support flush method', () => {
      const funcSpy = jest.fn()
      const debounced = debounce(funcSpy, 50)

      debounced()
      debounced.flush()
      expect(funcSpy).toHaveBeenCalledTimes(1)
    })

    test('support pending method', () => {
      const funcSpy = jest.fn()
      const debounced = debounce(funcSpy, 50)

      debounced()
      expect(debounced.pending()).toBe(true)

      jest.runAllTimers()
      expect(debounced.pending()).toBe(false)
    })
  })

  describe('throttle >', () => {
    test('call 5 times when throttle time sleep 10ms during 50ms', async () => {
      const limit = 50
      const funcSpy = jest.fn()
      const throttled = throttle(funcSpy, 10)

      const start = Date.now()
      let now = Date.now()
      while ((now - start) < limit) {
        throttled()
        now = Date.now()
      }

      expect(funcSpy).toHaveBeenCalledTimes(5)
    })
  })
})
