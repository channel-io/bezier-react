---
"@channel.io/bezier-react": minor
---

Re-implement `Modal` component

BREAKING_CHANGES

- No longer use `BaseModal` for internal implementations of `Modal`.
- The existing `Modal` is renamed `LegacyModal` and will be removed from subsequent PR.
- The `ModalAction` component is renamed `ModalFooter`.
- The `targetElement` property in `ModalProps` is renamed `container`.
- The `showCloseIcon` property is moved from `ModalProps` to `ModalContentProps`.
- The `title`, `subTitle`, `description`, and `titleSize` properties are moved from `ModalContentProps` to the new `ModalHeaderProps`.
