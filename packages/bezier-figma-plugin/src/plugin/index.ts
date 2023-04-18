import {
  type ExtractIconPluginMessage,
  type GetTokenPluginMessage,
  type UIMessage,
} from '../types/Message'

import {
  findAllComponentNode,
  flatten,
} from './utils'

// eslint-disable-next-line no-console
console.info('Figma file key: ', figma.fileKey)

figma.showUI(__html__, { width: 400, height: 300 })

function extractIcon() {
  const componentNodes = figma.currentPage.selection
    .map(findAllComponentNode)
    .reduce(flatten, [])
    .map(({ id, name }) => ({ id, name }))

  const componentNodesIdsQuery = componentNodes
    .map(({ id }) => id)
    .join(',')

  const pluginMessage: ExtractIconPluginMessage = {
    type: 'extractIcon',
    payload: {
      fileKey: figma.fileKey as string,
      ids: componentNodesIdsQuery,
      nodes: componentNodes,
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
