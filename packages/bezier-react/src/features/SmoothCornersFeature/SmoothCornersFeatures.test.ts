import SmoothCornersFeature from './SmoothCornersFeature'

describe('SmoothCornersFeature', () => {
  let addModule: jest.Mock

  beforeEach(() => {
    addModule = jest.fn(() => Promise.resolve())

    Object.defineProperty(global, 'URL', {
      value: {
        createObjectURL: jest.fn(),
      },
    })

    Object.defineProperty(global, 'CSS', {
      value: {
        paintWorklet: { addModule },
      },
    })
  })

  it('If the global objects are the same, activate should only be executed once.', async () => {
    await SmoothCornersFeature.activate(globalThis)
    await SmoothCornersFeature.activate(globalThis)
    expect(addModule).toHaveBeenCalledTimes(1)
  })

  it('If the global object has changed, activate should be executed again.', async () => {
    await SmoothCornersFeature.activate(globalThis)
    expect(addModule).toHaveBeenCalledTimes(0)
    await SmoothCornersFeature.activate({ ...globalThis })
    expect(addModule).toHaveBeenCalledTimes(1)
  })
})
