---
'@channel.io/bezier-react': major
'@channel.io/bezier-codemod': patch
---

Align beta Form and FormField with the updated design specification.

- Remove FormField's `size` prop, its context value, and the beta `FormFieldSize` export. Set `size` on TextInput or `triggerSize` on Select/MultiSelect instead.
- Place descriptions under labels and keep them visible alongside validation errors. Errors always appear below controls and both texts remain connected through ARIA.
- Update top/left layout, label minimum width, field spacing, required markers, typography, and error icons.

Keep existing FormField children and label wrappers unchanged. Layout uses rendered element styles without classifying React component types or reparenting controls. No label/control-area wrappers are required.

Update migration diagnostics and guidance for removed FormField size and automatic required markers.
