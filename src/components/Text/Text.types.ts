/* Internal dependencies */
import { ContentComponentProps } from '../../foundation/ComponentProps'
import { RendererProps } from '../../foundation/renderComponent'

export interface TextProps extends ContentComponentProps<string> {}

export type TextRendererProps = RendererProps<TextProps>
