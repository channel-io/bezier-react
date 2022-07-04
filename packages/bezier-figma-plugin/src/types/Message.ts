export interface ExtractIconPluginMessage {
  type: 'extractIcon'
  payload: {
    fileKey: string
    ids: string
    nodes: Array<{ id: string, name: string }>
  }
}

export interface GetTokenPluginMessage {
  type: 'getToken'
  payload: {
    figmaToken?: string
    githubToken?: string
  }
}

export interface PluginMessage {
  pluginMessage: ExtractIconPluginMessage | GetTokenPluginMessage
}

export interface ExtractUIMessage {
  type: 'extract'
}

export interface GetTokenUIMessage {
  type: 'getToken'
}

export interface SetTokenUIMessage {
  type: 'setToken'
  payload: string
}

export type UIMessage = ExtractUIMessage | GetTokenUIMessage | SetTokenUIMessage
