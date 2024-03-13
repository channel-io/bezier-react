import {
  type ExtractIconPluginMessage,
  type GetTokenPluginMessage,
  type SvgByName,
  type UIMessage,
} from '../types/Message'

import { findAllComponentNode } from './utils'

// eslint-disable-next-line no-console
console.info('Figma file key: ', figma.fileKey)

figma.showUI(__html__, { width: 400, height: 300 })

async function extractIcon() {
  const componentNodes = figma.currentPage.selection
    .map(findAllComponentNode)
    .flatMap(v => v)

  const svgs = await Promise.all(componentNodes.map((
    async (node) => {
      try {
        const svg = await node.exportAsync({ format: 'SVG_STRING' })
        const id = node.name
        return {
          svg,
          id,
        }
      } catch (e) {
        /* eslint-disable no-console */
        console.log(e)
        console.log(node)
        /* eslint-enable no-console */
        return undefined
      }
    }
  )))

  const svgByName = svgs.reduce((acc, cur) => {
    if (!cur?.id) { return acc }
    acc[cur.id] = cur
    return acc
  }, {} as SvgByName)

  const pluginMessage: ExtractIconPluginMessage = {
    type: 'extractIcon',
    payload: {
      svgByName,
    },
  }

  figma.ui.postMessage(pluginMessage)
}

figma.ui.onmessage = async (msg: UIMessage) => {
  if (msg.type === 'extract') {
    extractIcon()
  }

  if (msg.type === 'getToken') {
    const token = await figma.clientStorage.getAsync('token')
    const pluginMessage: GetTokenPluginMessage = {
      type: 'getToken',
      payload: token,
    }

    figma.ui.postMessage(pluginMessage)
  }

  if (msg.type === 'setToken') {
    await figma.clientStorage.setAsync('token', msg.payload)
  }
}
