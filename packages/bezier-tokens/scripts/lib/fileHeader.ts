import {
  type FileHeader,
  type Named,
} from 'style-dictionary'

import packageJson from '../../package.json'

export const customFileHeader: Named<{ fileHeader: FileHeader }> = {
  name: 'customFileHeader',
  fileHeader: () => [
    'Copyright 2023 Channel Corp.',
    `${packageJson.name} v${packageJson.version}`,
  ],
}
