# WEB-13652: consumer update handoff

Use this handoff when upgrading to a Bezier release containing WEB-13652.
The target version is not assigned by this document. Check the published release
before updating a dependency or lockfile.

## Confirmed source changes

This inventory uses the ten repositories' `exp` snapshots fetched on 2026-09-21.
Recheck the target repository's latest branch at migration time. Counts are JSX
source locations, not the number of fields rendered from lists or schemas.

| Repository       | File                                                                                                       | Change                                                                                                                        |
| ---------------- | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ch-desk-web      | `apps/ch-desk-web/src/features/Marketing/modules/message/components/ProductRecommend/CarouselItemCard.tsx` | Remove 3 manual required stars (image, URL, title); retain `required`.                                                        |
| cht-ai-marketing | `clients/desk/src/features/ai-campaign/ui/ProactiveMessageEditor/CarouselModal.tsx`                        | Remove 3 manual required stars (image, URL, title); retain `required`.                                                        |
| cht-notebook     | `client/src/page/DataConnectionPage/ConnectorFormBody.tsx`                                                 | Remove 1 manual required star from the data source name label.                                                                |
| cht-notebook     | `client/src/page/DataConnectionPage/DynamicField.tsx`                                                      | Remove 1 conditional manual required star; preserve schema-driven `required`.                                                 |
| ch-app-store     | `client/packages/design-preview/src/ui/AppStoreDesignFormField.tsx`                                        | Remove `size={size}` from `FormField` and 1 manual required star. Keep the adapter's `size` prop and `TextInput size={size}`. |
| cos-client       | `clip/@clips/app-function-input/src/AppFunctionInputClip.tsx`                                              | Remove `size="l"` from `FormField`. The numeric `TextInput` already has `size="l"`; preserve it.                              |

Total: **5 repositories, 6 files; 2 FormField.size sites and 9 manual-star sites**.
The App Store adapter contains both kinds of change. Its 9 generated call sites
do not need changing. Notebook DynamicField is one source location that can
render many required fields.

No beta `FormFieldSize` imports or consumers of the removed context size were
found in these snapshots. Search again when updating; remove obsolete imports
if new ones exist. Do not remove the legacy root API's same-named type merely
because its name matches.

The other five repositories had no identified source changes for these items:
`cht-biz-cert`, `cht-custom-function`, `prod-core-drive`, `prod-core-finance`,
and `prod-core-scheduled-message`. Updating their Bezier dependency may still
require normal visual verification; this is not a claim that all screens were
executed.

## Left-layout decision

Notebook's `SettingsFormField` has 21 product JSX locations. Only
`VariableNameField` in `client/src/components/InputCell/InputCell.tsx` has a
separate `FormErrorMessage` sibling. It has a short label and no description.
**Leave that structure unchanged for this update; no blanket layout migration
is requested.** Keep the existing 132px label column and 8px gap.

For a new or changed left-layout field whose long label/description separates
an error from its control, use one vertical layout container for the control
and error, with a 4px gap. Keep the label/description outside it and all children
inside the same `FormField`. Reuse an existing container when possible. Top
layouts and fields without a separate error do not need wrapping for this issue.

The beta migration guide includes the complete `VStack` example and checks.
The new package's manifest exposes the same guidance through
`bezier lookup FormField` and `bezier lookup FormErrorMessage`.

## Prompt to use in each repository

Copy this prompt into the target repository and fill in the target version.
The repository-specific file list above can be pasted with it.

```text
Update this repository to @channel.io/bezier-react version
[the published version containing WEB-13652] and apply its consumer migrations.
Use the repository's package manager and lockfile conventions. Preserve existing
uncommitted work. Verify that the target release includes WEB-13652; do not
substitute an arbitrary latest version or an unpublished version.

Context: beta FormField no longer accepts size or exposes FormFieldSize/context
size. Controls own their sizes. FormLabel automatically renders a required star.
Descriptions remain visible alongside errors. Field spacing, dividers, label
appearance and error icons have changed. Field placement uses CSS, with no
runtime child-type classification or height-measurement hook.

Read the installed-version guidance with the repo-local Bezier CLI:
  bezier lookup FormField
  bezier lookup FormErrorMessage
If the CLI is unavailable, inspect the corresponding entries in the installed
@channel.io/bezier-react/manifest.json. Use the beta migration guide shipped with
the matching codemod/skill when available. Do not infer APIs from stale docs.

Start from this repository's entries in the WEB-13652 inventory below, then
recheck its latest source. Trace beta imports, aliases, styled wrappers, attrs,
and forwarded props before editing. Exclude legacy root FormControl and local
components with the same names.

1. Remove size from beta FormField. Preserve all explicit control sizes. Keep
   size on application wrappers when they still forward it to a real control.
   TextInput uses size; Select/MultiSelect use triggerSize. Do not add size props
   to fixed-size controls. Review any newly found size inheritance explicitly.
   Remove beta FormFieldSize imports/context-size reads if present.
2. Remove manual stars only from FormLabel instances that already receive
   required=true through FormField. Preserve required semantics, label text,
   help content and accessibility. Do not remove stars from unrelated text or
   legacy components. Remove an unused star-only styled component if appropriate.
3. Do not introduce a blanket layout-wrapper migration. In Notebook specifically,
   leave VariableNameField's short-label/no-description structure and the other
   SettingsFormField callers unchanged; preserve their custom grid columns.
   If another left field actually needs error spacing independent of a tall
   label/description, reuse or add a VStack with width="100%" spacing={4} around
   only its control and error. Keep them under the same FormField context and
   keep the label/description outside. Do not use FormGroup just for one input
   and an error, and do not add wrappers to top layouts for this issue.
4. Preserve input values, refs, callbacks, explicit sizes, validation conditions,
   form submission ownership and existing label wrappers. Do not rewrite generated
   App Store preview call sites when its shared adapter handles the migration.

Known scope by repository (recheck before applying):
- ch-desk-web: CarouselItemCard.tsx, 3 manual stars.
- cht-ai-marketing: ProactiveMessageEditor/CarouselModal.tsx, 3 manual stars.
- cht-notebook: ConnectorFormBody.tsx and DynamicField.tsx, 1 manual star each.
- ch-app-store: design-preview/src/ui/AppStoreDesignFormField.tsx,
  1 FormField.size and 1 manual star; preserve TextInput's size and wrapper API.
- cos-client: app-function-input/src/AppFunctionInputClip.tsx,
  1 FormField.size; preserve the numeric TextInput's existing size="l".

Run the appropriate typecheck, lint and relevant existing tests. Verify affected
screens in normal/error states: one required star, unchanged control size,
visible descriptions, label association, aria-invalid/aria-describedby and input
state preservation. Check narrow widths and long descriptions when relevant.
Report the dependency version, changed files/counts, verification performed,
and any newly discovered cases or unverified screens. Do not edit other repos.
```
