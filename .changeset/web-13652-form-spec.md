---
'@channel.io/bezier-react': major
---

Align beta Form and FormField with the updated design specification.

- Remove FormField's `size` prop, its context value, and the beta `FormFieldSize` export. Set `size` on TextInput or `triggerSize` on Select/MultiSelect instead.
- Place descriptions under labels and keep them visible alongside validation errors. Errors always appear below controls and both texts remain connected through ARIA.
- Update top/left layout, label minimum width, field spacing, required markers, typography, and error icons.

FormLabel, FormHelperText, and FormErrorMessage should be direct children of FormField (Fragments are supported) so FormField can arrange them into label and control areas.
