---
'@channel.io/bezier-react': minor
---

Add v3 `DropdownMenu`, v3 `Overlay`, and an internal shared v3 item foundation.

`DropdownMenu` provides an action menu surface with optional `DropdownMenuTrigger`, controlled `show` / `target` usage, `DropdownMenuItem`, `DropdownMenuSeparator`, and submenu composition through `DropdownMenuSub`, `DropdownMenuSubTrigger`, and `DropdownMenuSubContent`.

`DropdownMenuItem` uses `content` for the primary label/content and `onSelect` for action handling so pointer and keyboard selection follow the same path. The v3 API also uses `offset` for trigger-to-menu spacing, defaults `keepInContainer` to `true`, supports `leadingContent` / `trailingContent`, and keeps lower-level overlay controls such as `zIndex`, `containerStyle`, `enableClickOutside`, and `withTransition` out of the first public DropdownMenu API.
