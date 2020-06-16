/* Internal dependencies */
import { ContentComponentProps } from '../../foundation/CommonProps'
import { FinalProps } from '../../foundation/renderComponent'

export interface TextProps extends ContentComponentProps<string> {}

export type TextViewProps = FinalProps<TextProps>
