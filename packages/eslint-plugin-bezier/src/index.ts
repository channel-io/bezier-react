import { noIconLikeGlyph } from './rules/no-icon-like-glyph.js'
import { noIconWrapperInOwnerSlot } from './rules/no-icon-wrapper-in-owner-slot.js'
import { noInlineSvg } from './rules/no-inline-svg.js'
import { noInternalDescendantSelector } from './rules/no-internal-descendant-selector.js'
import { noLegacyRootImport } from './rules/no-legacy-root-import.js'
import { noManualIconStyledTemplate } from './rules/no-manual-icon-styled-template.js'
import { noNativeControlBypass } from './rules/no-native-control-bypass.js'
import {
  noOrphanCompoundChild,
  reviewUnresolvedCompoundOwner,
} from './rules/no-orphan-compound-child.js'
import { noPrivateEntrypoint } from './rules/no-private-entrypoint.js'
import { noPublicStylePropBypass } from './rules/no-public-style-prop-bypass.js'
import { noUnsafePropTypeEscape } from './rules/no-unsafe-prop-type-escape.js'
import { preferLayoutComponent } from './rules/prefer-layout-component.js'
import { preferTextForPlainText } from './rules/prefer-text-for-plain-text.js'
import { requireSuppressionReason } from './rules/require-suppression-reason.js'

const rules = {
  'no-icon-like-glyph': noIconLikeGlyph,
  'no-icon-wrapper-in-owner-slot': noIconWrapperInOwnerSlot,
  'no-inline-svg': noInlineSvg,
  'no-internal-descendant-selector': noInternalDescendantSelector,
  'no-legacy-root-import': noLegacyRootImport,
  'no-manual-icon-styled-template': noManualIconStyledTemplate,
  'no-native-control-bypass': noNativeControlBypass,
  'no-orphan-compound-child': noOrphanCompoundChild,
  'no-private-entrypoint': noPrivateEntrypoint,
  'no-public-style-prop-bypass': noPublicStylePropBypass,
  'no-unsafe-prop-type-escape': noUnsafePropTypeEscape,
  'prefer-layout-component': preferLayoutComponent,
  'prefer-text-for-plain-text': preferTextForPlainText,
  'review-unresolved-compound-owner': reviewUnresolvedCompoundOwner,
  'require-suppression-reason': requireSuppressionReason,
}

const plugin = {
  meta: { name: '@channel.io/eslint-plugin-bezier' },
  rules,
}

export = plugin
