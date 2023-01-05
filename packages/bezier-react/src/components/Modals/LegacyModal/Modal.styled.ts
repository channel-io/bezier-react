/* Internal dependencies */
import {
  styled,
  ellipsis,
} from '~/src/foundation'
import { Text } from '~/src/components/Text'
import { Button } from '~/src/components/Button'

export const Contents = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 24px 24px 16px;
`

export const Title = styled.div`
  display: flex;
  flex: 1;
`

export const TitleAndSubTitle = styled.div`
  width: 100%;
`

export const TitleText = styled(Text).attrs(() => ({
  forwardedAs: 'div',
}))`
  box-sizing: border-box;
  width: 100%;
`

export const SubTitleText = styled(Text).attrs(() => ({
  forwardedAs: 'div',
}))`
  box-sizing: border-box;
  width: 100%;

  ${ellipsis()}
`

export const CloseIconButton = styled(Button)`
  margin-top: -6px;
  margin-right: -6px;
`

export const Description = styled.div`
  box-sizing: border-box;
  width: 100%;
  word-break: break-word;

  /* stylelint-disable declaration-block-semicolon-newline-after, rule-empty-line-before, no-duplicate-selectors */
  ${Title} + & {
    padding-top: 12px;
  }
  /* stylelint-enable declaration-block-semicolon-newline-after, rule-empty-line-before, no-duplicate-selectors */
`

export const ChildrenContent = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-top: 12px;
  word-break: break-word;
`

export const DescriptionText = styled(Text).attrs(() => ({
  forwardedAs: 'div',
}))``

export const Action = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 0 24px 24px;
`
