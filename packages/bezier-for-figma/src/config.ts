const config = {
  repository: {
    name: 'bezier-react',
    iconExtractPath: 'packages/bezier-react/src/components/Icon/assets',
    baseBranchName: 'next-v1',
    owner: 'channel-io',
  },
  commit: {
    message: 'feat(icons): update the icons',
    author: {
      name: 'sungik-choi',
      email: 'ed@channel.io',
    },
  },
  pr: {
    title: 'Extract the icons from Figma',
    body: 'Extract the icons from Figma',
  },
}

export default config
