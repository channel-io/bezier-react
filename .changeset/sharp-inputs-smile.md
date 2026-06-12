---
'@channel.io/bezier-react': minor
---

Add v3 input components: `TextInput`, `Search`, and `TextArea`.

`BaseTextInput` is added as an internal foundation for single-line v3 input components, with form-field integration, generated IDs, IME key handling, native input props, and v3 focus/error styling.

`TextInput` adds the v3 single-line text input API with `primary` and `secondary` variants, `m` and `l` sizes, leading/trailing content slots, and native text input attributes.

`Search` adds a strict v3 search input with a fixed leading search icon and optional clear button behavior.

`TextArea` keeps the existing autosizing row API while aligning focus, error, readonly, disabled, and form-field behavior with the v3 input styling.
