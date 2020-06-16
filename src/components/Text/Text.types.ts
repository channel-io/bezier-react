/* Internal dependencies */
import { ContentComponentProps } from '../../foundation/ComponentProps'
import { FinalProps } from '../../foundation/renderComponent'

export interface TextProps extends ContentComponentProps<string> {}

export type TextViewProps = FinalProps<TextProps>
